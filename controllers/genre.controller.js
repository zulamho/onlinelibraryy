const Genre = require("../models/Genre.model");
const Book = require("../models/Book.model");

module.exports.genreController = {
  addGenre: async (req, res) => {
    try {
      await Genre.create({
        name: req.body.name,
        book: req.body.book,
      });
      res.json("Жанр добавлен");
    } catch (err) {
      res.json(err);
    }
  },

  deleteGenre: async (req, res) => {
    try {
      await Genre.findById(req.params.id);
      res.json("Жанр удален!");
    } catch (err) {
      res.json(err);
    }
  },

  editGenre: async (req, res) => {
    try {
      await Genre.findByIdAndUpdate(req.params.id);
      res.json("Жанр изменен");
    } catch (err) {
      res.json(err);
    }
  },
  getGenres: async (req, res) => {
    try {
      const genres = await Genre.find().lean();
      res.render("genres", {
        genres,
      });
    } catch (err) {
      console.log(err);
    }
  },

  getGenreOne: async (req, res) => {
    try {
      const genreOne = await Book.findById({genres: req.params.id}).lean();
      res.render("genreOne", {
        genreOne,
      });
    } catch (err) {
      res.json(err);
    }
  },
};
