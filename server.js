const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("views"));

mongoose.connect("mongodb://localhost:27017/billingApp")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bills", require("./routes/billRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));