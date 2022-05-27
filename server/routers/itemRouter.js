const express = require("express");
const { getItems } = require("../controller/itemController");
const itemRouter = express.Router();
itemRouter.route("/").get(getItems);
module.exports = itemRouter;
