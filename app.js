const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

const exception = require("./Exception/exception");

const URL = "mongodb://localhost:27017/user_auth";

const authRoutes = require("../routes/authRoutes");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", authRoutes);
app.use(exception.exceptionHandler);
mongoose.connect(URL).then(() => {
  app.listen(5000, () => {
    console.log("App is listening at port 5000");
    console.log("Database connected");
  });
});
