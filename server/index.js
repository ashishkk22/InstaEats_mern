const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const itemRouter = require("./routers/itemRouter");
const morgan = require("morgan");
const queryRouter = require("./routers/queryRouter");
const authRouter = require("./routers/authRouter");
const authMiddleware = require("./middleware/auth-middleware");
const orderRouter = require("./routers/orderRouter");
const cors = require("cors");
const adminMiddleware = require("./middleware/admin-middleware");
const { adminGetOrder } = require("./controller/adminController");
const orderModel = require("./models/orderModel");
const adminRouter = require("./routers/adminRouter");

require("dotenv").config();
const corsOptions = {
  origin: process.env.CLIENT_LINK,
  credentials: true,
};
app.use(cookieParser());
app.use(cors(corsOptions));
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
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", process.env.CLIENT_LINK);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

app.use(express.json());
const port = process.env.PORT || 5000;
app.listen(port);
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/items", itemRouter);
app.use("/query", queryRouter);
app.use("/user", authRouter);
app.use("/order", authMiddleware, orderRouter);
app.use("/admin", adminMiddleware, adminRouter);
