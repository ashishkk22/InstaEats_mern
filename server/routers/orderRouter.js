const express = require("express");
const { orderPlace, orderList } = require("../controller/orderController");
const orderRouter = express.Router();
orderRouter.route("/").post(orderPlace);
orderRouter.route("/allOrders").get(orderList);
module.exports = orderRouter;
