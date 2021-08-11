const Reviews = require("../models/Reviews.model");

module.exports.reviewsController = {
  addReviews: async (req, res) => {
    try {
      await Reviews.create({
        text: req.body.text,
        reviewsBook: req.body.reviewsBook,
        reviewsClient: req.body.reviewsClient,
      });
      res.json("Отзыв добавлен");
    } catch (err) {
      res.json(err);
    }
  },

  deleteReviews : async (req , res ) => {
      try{
          await Reviews.findByIdAndDelete(req.params.id)
          res.json("Отзыв удален!")
      }catch (err) {
          res.json(err)
      }
  }
};
