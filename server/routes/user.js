const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.getAllUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/user-data", UserController.getUserData);

module.exports = router;
