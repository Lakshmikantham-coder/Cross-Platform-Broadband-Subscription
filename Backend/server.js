const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");
const Setabox = require("./models/Setabox");
const Plan = require("./models/Plan");
const Usage = require("./models/Usage");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("🚀 Broadband Subscription Portal Backend Running");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
