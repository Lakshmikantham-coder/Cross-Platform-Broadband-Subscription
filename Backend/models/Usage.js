const mongoose = require("mongoose");

const usageSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  plan_id: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },
  box_id: { type: mongoose.Schema.Types.ObjectId, ref: "Setabox", required: true },
  usage_data: {
    data_used_gb: { type: Number, default: 0 }
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Usage", usageSchema);
