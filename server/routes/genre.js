const express = require("express");
const router = express.Router();
const GenreController = require("../controllers/genreController");

router.get("/", GenreController.getAllGenre);
router.post("/", GenreController.postGenre);
router.get("/:id", GenreController.getGenreById);
router.put("/:id", GenreController.putGenreById);
router.delete("/:id", GenreController.deleteGenreById);

module.exports = router;
