const { Router } = require("express");
const { bookController } = require("../controllers/book.controller");

const router = Router();

router.post("/", bookController.addBook);
router.get("/", bookController.getBook);
router.get("/book/:id", bookController.getBookOne);
router.delete("/book/:id", bookController.deleteBook);

module.exports = router;
