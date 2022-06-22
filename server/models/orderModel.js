const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: true,
    },
    items: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "itemModel",
        required: true,
      },
    ],
    mobile: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["order_placed", "confirmed", "prepared", "delivered", "completed"],
      default: "order_placed",
    },
    paymentType: {
      type: String,
      default: "COD",
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("orderModel", orderSchema);
async function createItem() {
  let planObj = {
    name: "Pulav",
    image: "../../images/pulav.jpeg",
    price: 159,
  };
  //with method 1
  //   let data = await planModel.create(planObj);
  //   console.log(data);
  //with method 2
  const doc = new orderModel(planObj);
  await doc.save();
}
module.exports = orderModel;
