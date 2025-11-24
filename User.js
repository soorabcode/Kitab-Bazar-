const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    sparse: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  avatar: {
    type: String,
    default: ''
  },
  provider: {
    type: String,
    enum: ['local', 'google'],
    default: 'local'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  membershipStatus: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free'
  },
  preferences: {
    theme: {
      type: String,
      enum: ['light', 'dark'],
      default: 'light'
    },
    notifications: {
      type: Boolean,
      default: true
    },
    language: {
      type: String,
      default: 'en'
    }
  },
  wishlist: [{
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  cart: [{
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    },
    quantity: {
      type: Number,
      default: 1,
      min: 1
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  lastLogin: {
    type: Date
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
userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for better query performance
userSchema.index({ email: 1 });
userSchema.index({ googleId: 1 });

// Virtual for full name
userSchema.virtual('firstName').get(function() {
  return this.name.split(' ')[0];
});

// Method to add to wishlist
userSchema.methods.addToWishlist = function(bookId) {
  if (!this.wishlist.some(item => item.book.toString() === bookId.toString())) {
    this.wishlist.push({ book: bookId });
    return true;
  }
  return false;
};

// Method to remove from wishlist
userSchema.methods.removeFromWishlist = function(bookId) {
  const index = this.wishlist.findIndex(item => item.book.toString() === bookId.toString());
  if (index > -1) {
    this.wishlist.splice(index, 1);
    return true;
  }
  return false;
};

// Method to add to cart
userSchema.methods.addToCart = function(bookId, quantity = 1) {
  const existingItem = this.cart.find(item => item.book.toString() === bookId.toString());
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    this.cart.push({ book: bookId, quantity });
  }
};

// Method to remove from cart
userSchema.methods.removeFromCart = function(bookId) {
  const index = this.cart.findIndex(item => item.book.toString() === bookId.toString());
  if (index > -1) {
    this.cart.splice(index, 1);
    return true;
  }
  return false;
};

// Method to clear cart
userSchema.methods.clearCart = function() {
  this.cart = [];
};

module.exports = mongoose.model('User', userSchema);
