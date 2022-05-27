const itemModel = require("../models/itemModel");
module.exports.getItems = async function getItems(req, res) {
  let items = await itemModel.find();
  try {
    if (items) {
      res.status(200).json({
        message: "this is the available items",
        foodItems: items,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      error: err,
    });
  }
};
