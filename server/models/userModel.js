const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
