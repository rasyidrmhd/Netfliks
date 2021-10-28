const express = require("express");
const router = express.Router();
const user = require("./user");
const movie = require("./movie");

router.get("/", (req, res) => {
  res.send("Hello Rakaaa");
});

router.use("/user", user);
router.use("/movie", movie);

module.exports = router;
