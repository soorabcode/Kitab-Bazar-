const mongoose = require('mongoose');

const readingProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  currentPage: {
    type: Number,
    default: 0,
    min: 0
  },
  totalPages: {
    type: Number,
    required: true,
    min: 1
  },
  status: {
    type: String,
    enum: ['not-started', 'reading', 'completed', 'abandoned'],
    default: 'not-started'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  completionDate: {
    type: Date
  },
  lastReadDate: {
    type: Date,
    default: Date.now
  },
  readingSessions: [{
    date: {
      type: Date,
      default: Date.now
    },
    pagesRead: {
      type: Number,
      min: 0
    },
    duration: {
      type: Number, // in minutes
      min: 0
    },
    notes: {
      type: String,
      trim: true,
      maxLength: 500
    }
  }],
  bookmarks: [{
    page: {
      type: Number,
      min: 1
    },
    note: {
      type: String,
      trim: true,
      maxLength: 200
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    trim: true,
    maxLength: 1000
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
readingProgressSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  this.lastReadDate = Date.now();

  // Auto-update status based on progress
  if (this.currentPage >= this.totalPages && this.status !== 'completed') {
    this.status = 'completed';
    this.completionDate = Date.now();
  } else if (this.currentPage > 0 && this.status === 'not-started') {
    this.status = 'reading';
  }

  next();
});

// Index for better query performance
readingProgressSchema.index({ user: 1, book: 1 }, { unique: true });
readingProgressSchema.index({ user: 1, status: 1 });
readingProgressSchema.index({ user: 1, lastReadDate: -1 });

// Virtual for progress percentage
readingProgressSchema.virtual('progressPercentage').get(function() {
  return Math.round((this.currentPage / this.totalPages) * 100);
});

// Virtual for total reading time
readingProgressSchema.virtual('totalReadingTime').get(function() {
  return this.readingSessions.reduce((total, session) => total + (session.duration || 0), 0);
});

// Virtual for total pages read
readingProgressSchema.virtual('totalPagesRead').get(function() {
  return this.readingSessions.reduce((total, session) => total + (session.pagesRead || 0), 0);
});

// Method to add reading session
readingProgressSchema.methods.addReadingSession = function(pagesRead, duration, notes = '') {
  this.readingSessions.push({
    pagesRead,
    duration,
    notes
  });

  // Update current page
  this.currentPage = Math.min(this.currentPage + pagesRead, this.totalPages);

  return this.save();
};

// Method to add bookmark
readingProgressSchema.methods.addBookmark = function(page, note = '') {
  // Check if bookmark already exists for this page
  if (!this.bookmarks.some(bookmark => bookmark.page === page)) {
    this.bookmarks.push({ page, note });
    return this.save();
  }
  return Promise.resolve(this);
};

// Method to remove bookmark
readingProgressSchema.methods.removeBookmark = function(page) {
  this.bookmarks = this.bookmarks.filter(bookmark => bookmark.page !== page);
  return this.save();
};

// Static method to get user's reading statistics
readingProgressSchema.statics.getUserStats = async function(userId) {
  const stats = await this.aggregate([
    { $match: { user: mongoose.Types.ObjectId(userId) } },
    {
      $group: {
        _id: null,
        totalBooks: { $sum: 1 },
        completedBooks: {
          $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] }
        },
        currentlyReading: {
          $sum: { $cond: [{ $eq: ['$status', 'reading'] }, 1, 0] }
        },
        totalPagesRead: { $sum: '$currentPage' },
        totalReadingTime: {
          $sum: {
            $reduce: {
              input: '$readingSessions.duration',
              initialValue: 0,
              in: { $add: ['$$value', '$$this'] }
            }
          }
        }
      }
    }
  ]);

  return stats.length > 0 ? stats[0] : {
    totalBooks: 0,
    completedBooks: 0,
    currentlyReading: 0,
    totalPagesRead: 0,
    totalReadingTime: 0
  };
};

module.exports = mongoose.model('ReadingProgress', readingProgressSchema);
