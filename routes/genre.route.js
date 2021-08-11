const { Router } = require("express");
const { genreController } = require("../controllers/genre.controller");

const router = Router();

router.post("/genre", genreController.addGenre);
router.get("/genres", genreController.getGenres);
router.get("/genres/:id", genreController.getGenreOne);
router.patch("/genre/:id", genreController.editGenre);
router.delete("/genre/:id", genreController.deleteGenre);

module.exports = router;
