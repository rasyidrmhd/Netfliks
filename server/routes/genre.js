const express = require("express");
const router = express.Router();
const GenreController = require("../controllers/genreController");
const { authN } = require("../middlewares/authN");

router.get("/", GenreController.getAllGenre);
router.get("/:id", GenreController.getGenreById);

router.use(authN);
router.post("/", GenreController.postGenre);
router.put("/:id", GenreController.putGenreById);
router.delete("/:id", GenreController.deleteGenreById);

module.exports = router;
