const orderModel = require("../models/orderModel");

module.exports.orderPlace = async function orderPlace(req, res) {
  let { mobile, address } = req.body;
  try {
    if (!mobile || !address) {
      return res.status(403).json({ message: "phone and address is required" });
    }
    const obj = {
      customerId: req.user._id,
      items: req.body.item,
      mobile,
      address,
      totalPrice: req.body.totalPrice,
      status: "order_placed",
      paymentType: "COD",
    };
    let order = await orderModel.create(obj);
    return res.status(200).json({
      message: "order placed successfully",
      data: order,
    });
  } catch (err) {
    return res.status(401).json({
      message: "error in placing order",
    });
  }
};
module.exports.orderList = async function orderList(req, res) {
  try {
    let order = await orderModel
      .find({ customerId: req.user._id }, null, { sort: { createdAt: -1 } })
      .select("-items ");
    return res.status(200).json({
      message: "all order of the customer",
      data: order,
    });
  } catch (err) {
    return res.status(401).json({
      message: "error in finding the orders of the customer",
    });
  }
};
