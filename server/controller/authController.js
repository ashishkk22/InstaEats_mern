const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
module.exports.userSignUp = async function userSignUp(req, res) {
  let { name, email, password } = req.body;
  try {
    const userRegistered = await userModel.findOne({ email: email });
    if (userRegistered) {
      return res.status(400).json({
        message: "Already registered user",
      });
    }
    if (!name && !email && !password) {
      return res.status(400).json({
        message: "please enter all the filed",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    let data = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      message: "signup successful",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports.userSignIn = async function userSignIn(req, res) {
  let { email, password } = req.body;
  try {
    if (!email && !password) {
      return res.status(400).json({
        message: "please enter all the filed",
      });
    }
    const user = await userModel.findOne({ email: email });
    if (await bcrypt.compare(password, user.password)) {
      return res.status(200).json({
        message: "signIn successful",
      });
    } else {
      return res.status(400).json({
        message: "Wrong Credentials",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
