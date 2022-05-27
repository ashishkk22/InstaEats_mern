const mongoose = require("mongoose");
const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

const queryModel = mongoose.model("queryModel", querySchema);
async function createItem() {
  let planObj = {
    name: "Pulav",
    email: "ashishkachhadiya@gmail.com",
    query: "jsn",
  };
  //with method 1
  //   let data = await planModel.create(planObj);
  //   console.log(data);
  //with method 2
  const doc = new queryModel(planObj);
  await doc.save();
}
module.exports = queryModel;
