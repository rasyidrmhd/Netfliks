const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { authN } = require("../middlewares/AuthN");

router.get("/", authN, UserController.getAllUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/user-data", authN, UserController.getUserData);

module.exports = router;
