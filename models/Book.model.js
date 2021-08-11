const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  genres: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
  reviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reviews",
  },
  image: String,
  rented: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
