const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['self-help', 'ai', 'signal', 'math', 'all']
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 4.0
  },
  image: {
    type: String,
    default: '/uploads/default-book.jpg'
  },
  description: {
    type: String,
    default: ''
  },
  isbn: {
    type: String,
    default: ''
  },
  pages: {
    type: Number,
    min: 1
  },
  publisher: {
    type: String,
    default: ''
  },
  publishedDate: {
    type: Date
  },
  stock: {
    type: Number,
    default: 10,
    min: 0
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  averageRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviewCount: {
    type: Number,
    default: 0
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
bookSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for better query performance
bookSchema.index({ title: 'text', author: 'text' });
bookSchema.index({ category: 1 });
bookSchema.index({ price: 1 });
bookSchema.index({ rating: -1 });

module.exports = mongoose.model('Book', bookSchema);
