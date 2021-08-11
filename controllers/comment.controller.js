const Comment = require("../models/Comment.model");

module.exports.commentController = {
  addComment: async (req, res) => {
    try {
      await Comment.create({
        author: req.body.author,
        text: req.body.text,
        commentBook: req.body.commentBook,
      });
      res.json("Комм добавлен");
    } catch (err) {
      res.json(err);
    }
  },
  deleteComment: async (req , res ) =>{
      try{
          await Comment.findByIdAndDelete(req.params.id) 
          res.json("Комм удален!")
      }catch (err){
          res.json(err)
      }
  }
};
