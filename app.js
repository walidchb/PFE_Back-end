var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var productRouter = require("./routes/product");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/GoMyCode", function (error) {
  if (error) {
    console.log("error" + error);
  } else {
    console.log("open done");
  }
});

var app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/product", productRouter);

module.exports = app;
