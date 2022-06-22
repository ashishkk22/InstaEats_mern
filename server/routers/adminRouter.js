const express = require("express");
const {
  adminGetOrder,
  updateOrderStatus,
} = require("../controller/adminController");
const adminRouter = express.Router();
adminRouter.route("/AllOrders").get(adminGetOrder);
adminRouter.route("/updateStatus").post(updateOrderStatus);

module.exports = adminRouter;
