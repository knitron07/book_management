const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
    },
    author: {
      type: String,
      require: true,
      min: 3,
    },
    publishYear: {
      type: Number,
      require: true,
    },
    coverPicture: {
      type: String,
      default: '',
    },
    aboutBook: {
      type: String,
      default: '',
    },
    borrowers: {
      type: Array,
      default: [],
    },

    copies: {
      type: Number,
      require: true,
    },
  },

  { timestamps: true },
);

module.exports = mongoose.model('Books', BooksSchema);
