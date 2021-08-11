const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  name: String,
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
