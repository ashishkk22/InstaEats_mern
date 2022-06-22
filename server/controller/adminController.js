const orderModel = require("../models/orderModel");

module.exports.adminGetOrder = async function adminGetOrder(req, res) {
  try {
    const orders = await orderModel
      .find({ status: { $ne: "completed" } }, null, { sort: { createdAt: -1 } })
      .populate("customerId", "-password");
    return res.status(200).json({
      message: "orders fetched successfully",
      orders,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports.updateOrderStatus = async function updateOrderStatus(req, res) {
  const { orderId, changedStatus } = req.body;
  try {
    if (!orderId || !changedStatus) {
      return res.status(400).json({
        message: "please enter all the fields",
      });
    }
    const orderUpdate = await orderModel.updateOne(
      { _id: orderId },
      { $set: { status: changedStatus } }
    );
    if (!orderUpdate.acknowledged) {
      return res.status(404).json({
        message: "order not found",
      });
    }
    return res.status(200).json({
      message: "order status updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
