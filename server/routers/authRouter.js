const express = require("express");
const { userSignUp, userSignIn } = require("../controller/authController");
const authRouter = express.Router();
authRouter.route("/signup").post(userSignUp);
authRouter.route("/signin").post(userSignIn);
module.exports = authRouter;
