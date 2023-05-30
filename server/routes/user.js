const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { authN } = require("../middlewares/authN");

router.post("/login", UserController.login);
router.use(authN);
router.get("/", UserController.getAllUser);
router.post("/register", UserController.register);
router.delete("/:id", UserController.deleteUserById);
router.get("/user-data", UserController.getUserData);

module.exports = router;
