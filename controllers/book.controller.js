const Book = require("../models/Book.model");
const Genre = require("../models/Genre.model");

module.exports.bookController = {
  addBook: async (req, res) => {
    try {
      await Book.create({
        name: req.body.name,
        genres: req.body.genres,
        comments: req.body.comments,
        reviews: req.body.reviews,
        image: req.body.image,
      });
      res.json("Книга добавлена!");
    } catch (err) {
      res.json(err);
    }
  },

  getBook: async (req, res) => {
    try {
      const dataBook = await Book.find().lean();
      res.render("home", { dataBook });
    } catch (err) {
      res.json(err);
    }
  },

  getBookOne: async (req, res) => {
    try {
      const bookData = await Book.findById(req.params.id).lean();
      const genreData = await Genre.findById(req.params.idgenre).lean();
      res.render("single_book", { bookData, genreData });
    } catch (err) {
      res.json(err);
    }
  },

  getBookOneGenre: async (req, res) => {
    try {
      const bookData = await Book.findById(req.params.id).lean();
      const genreData = await Genre.findById(req.params.idgenre).lean().populate();
      res.render("single_book", { bookData, genreData });
    } catch (err) {
      res.json(err);
    }
  },

  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json("Книга удалена!");
    } catch (err) {
      res.json(err);
    }
  },
};
