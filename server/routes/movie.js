const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");
const { authN } = require("../middlewares/authN");

router.get("/", MovieController.getAllMovie);
router.get("/:slug", MovieController.getMovieBySlug);

router.use(authN);
router.post("/", MovieController.postMovie);
router.put("/:slug", MovieController.putMovieById);
router.delete("/:id", MovieController.deleteMovieById);

module.exports = router;
