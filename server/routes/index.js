const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middlewares/errorHandler");
const user = require("./user");
const genre = require("./genre");
const movie = require("./movie");

// router.get("/", (req, res) => {
//   res.send("Hello Rakaaa");
// });

router.use("/user", user);
router.use("/genre", genre);
router.use("/movie", movie);
router.use(errorHandler);

module.exports = router;
