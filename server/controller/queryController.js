const queryModel = require("../models/queryModel");
//post query function with query update feature
module.exports.postQuery = async function postQuery(req, res) {
  let { name, email, query } = req.body;
  try {
    const user = await queryModel.findOne({ email: email });
    if (user) {
      let data = await queryModel.updateOne(
        { email: user.email },
        { $set: { query: query } }
      );
      return res.status(200).json({
        message: "query updated successfully",
      });
    }
    if (name && email && query) {
      let data = await queryModel.create({ name, email, query });
      return res.status(200).json({
        message: "query received successfully",
        data,
      });
    } else {
      return res.status(400).json({ message: "All fields are required!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Db error" });
  }
};

//fetch all the query
module.exports.getQueries = async function getQueries(req, res) {
  try {
    const data = await queryModel.find();
    if (!data) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
    return res.status(200).json({
      message: "data fetched successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

//delete the query
module.exports.deleteQuery = async function deleteQuery(req, res) {
  const { id } = req.body;
  try {
    const data = await queryModel.deleteOne({ _id: id });
    if (!data) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
    return res.status(200).json({
      message: "query deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
