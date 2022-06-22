const express = require("express");
const {
  postQuery,
  getQueries,
  deleteQuery,
} = require("../controller/queryController");
const adminMiddleware = require("../middleware/admin-middleware");
const queryRouter = express.Router();
queryRouter.route("/").post(postQuery);
queryRouter.route("/getQueries").get(adminMiddleware, getQueries);
queryRouter.route("/deleteQuery").post(adminMiddleware, deleteQuery);
module.exports = queryRouter;
