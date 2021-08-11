const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: String,
  text: String,
  commentBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
