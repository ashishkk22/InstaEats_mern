const orderModel = require("../models/orderModel");

module.exports.orderPlace = async function orderPlace(req, res) {
  let { mobile, address } = req.body;
  try {
    if (!mobile || !address) {
      return res.status(403).json({ message: "phone and address is required" });
    }
    console.log(req.body.item);
    const obj = {
      customerId: req.user._id,
      items: req.body.item,
      mobile,
      address,
      totalPrice: req.body.totalPrice,
      status: "order_placed",
      paymentType: "COD",
    };
    console.log(obj);
    let order = await orderModel.create(obj);
    console.log(order);
    return res.status(200).json({
      message: "order placed successfully",
      data: order,
    });
  } catch (err) {
    console.log(err);
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
    console.log(order);
    return res.status(200).json({
      message: "all order of the customer",
      data: order,
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "error in finding the orders of the customer",
    });
  }
};
