const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports = async function (req, res, next) {
  try {
    const { TOKEN } = req.cookies;
    if (!TOKEN) {
      throw new Error();
    }
    console.log(TOKEN);
    const { id } = jwt.verify(TOKEN, process.env.JWT_SECRET);
    console.log(id);
    const data = await userModel.find();
    req.user = await userModel.findById(id).select("-password");
    next();
  } catch (err) {
    res
      .status(401)
      .json({ message: "Unauthorized user please login to continue" });
  }
};
