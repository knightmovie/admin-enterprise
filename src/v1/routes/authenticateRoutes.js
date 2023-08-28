
const express = require("express");
const authenticateController = require("../../controlers/authenticateController");
const AuthMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/login", authenticateController.login);

router.post("/forget-password", authenticateController.forgetPassword);

router.post("/logout", authenticateController.logout);

router.post("/register", AuthMiddleware.checkDuplicateRegister, authenticateController.register);


module.exports = router;