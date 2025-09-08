const mongoose = require("mongoose");

const setaboxSchema = new mongoose.Schema({
  type: { type: String, enum: ["HD", "SD"], required: true },
  name: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" }
});

module.exports = mongoose.model("Setabox", setaboxSchema);