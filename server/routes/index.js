const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middlewares/errorHandler");
const user = require("./user");
const genre = require("./genre");
const movie = require("./movie");

// router.get("/", (req, res) => {
//   res.send("Hello Rakaaa");
// });

router.use("/users", user);
router.use("/genres", genre);
router.use("/movies", movie);
router.use(errorHandler);

module.exports = router;
