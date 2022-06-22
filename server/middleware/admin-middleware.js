const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports = async function (req, res, next) {
  try {
    const { TOKEN } = req.cookies;
    if (!TOKEN) {
      throw new Error();
    }
    const { id } = jwt.verify(TOKEN, process.env.JWT_SECRET);
    const data = await userModel.findById(id).select("-password");
    if (data.role === "admin") {
      next();
    } else {
      return res.status(401).json({
        message: "unauthorized access",
      });
    }
  } catch (err) {
    res
      .status(401)
      .json({ message: "Unauthorized user please login to continue" });
  }
};
