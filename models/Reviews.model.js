const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  text: String,
  reviewsBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  reviewsClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = Reviews;
