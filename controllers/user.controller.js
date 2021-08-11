const User = require("../models/User.model");
const Book = require("../models/Book.model");

module.exports.userController = {
  addUser: async (req, res) => {
    try {
      await User.create({
        name: req.body.name,
        surname: req.body.surname,
        isBlocked: req.body.isBlocked,
        bookRent: [],
      });
      res.json("Пользователь добавлен!");
    } catch (err) {
      res.json(err);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("Комментарий удален!");
    } catch (err) {
      res.json(err);
    }
  },

  getUsers: async (req, res) => {
    try {
      const dataUsers = await User.find();
      res.json(dataUsers);
    } catch (err) {
      res.json(res);
    }
  },

  editUser: async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id);

      res.json("Данные пользователя изменены!");
    } catch (err) {
      res.json(err);
    }
  },

  getUserOne: async (req, res) => {
    try {
      const Users = await User.findById(req.params.id);
      const books = await Book.findById(req.params.id);
      res.json({ Users, books });
    } catch (err) {
      res.json(err);
    }
  },

  rentBookUser: async (req, res) => {
    const users = await User.findById(req.params.userId);
    const books = await Book.findById(req.params.bookId);
    try {
      if (users.isBlocked) {
        res.json("Пользователь заблокирован!");
      } else if (users.bookRent.length >= 3) {
        res.json("Нельзя арендовать больше чем 3 книг");
      } else if (books.rented) {
        res.json("Эта книга уже арендована!");
      } else {
        await User.findByIdAndUpdate(req.params.userId, {
          $push: { bookRent: req.params.bookId },
        });
        await Book.findByIdAndUpdate(req.params.bookId, {
          rented: req.body.userId,
        });
        res.json("ok");
      }
    } catch (err) {
      res.json(err);
    }
  },
};
