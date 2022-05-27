const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const itemRouter = require("./routers/itemRouter");
const morgan = require("morgan");
const queryRouter = require("./routers/queryRouter");
const authRouter = require("./routers/authRouter");
require("dotenv").config();
const db_link = process.env.DB_LINK;
mongoose
  .connect(db_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function (db) {
    console.log("db is connected");
  })
  .catch(function (err) {
    console.log(err);
  });
app.use(morgan("dev"));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_LINK);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(cookieParser());
app.listen(5000);
app.use("/items", itemRouter);
app.use("/query", queryRouter);
app.use("/user", authRouter);
