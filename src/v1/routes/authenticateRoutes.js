
const express = require("express");
const authenticateController = require("../../controlers/authenticateController");
const {auth} = require("../../middleware/auth");
const authMiddleware = require("../../middleware/verifyRegister");

const router = express.Router();

router.post("/login", authenticateController.login);

router.post("/forget-password", authenticateController.forgetPassword);

router.post("/logout", authenticateController.logout);

router.post("/register", authMiddleware.checkDuplicateRegister, authenticateController.register);


module.exports = router;