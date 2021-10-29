const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");
const { authN } = require("../middlewares/authN");

router.get("/", MovieController.getAllMovie);
router.post("/", authN, MovieController.postMovie);
router.get("/:slug", MovieController.getMovieBySlug);
router.put("/:id", MovieController.putMovieById);
router.delete("/:id", MovieController.deleteMovieById);

module.exports = router;
