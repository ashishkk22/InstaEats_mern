const express = require("express");
const { postQuery } = require("../controller/queryController");
const queryRouter = express.Router();
queryRouter.route("/").post(postQuery);
module.exports = queryRouter;
