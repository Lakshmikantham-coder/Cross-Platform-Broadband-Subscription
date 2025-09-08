const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true }, // hashed
  role: { type: String, enum: ["customer", "admin", "analyst"], default: "customer" },
  setabox_id: { type: mongoose.Schema.Types.ObjectId, ref: "Setabox" },
  plans: [
    {
      plan_id: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
      recharge_date: { type: Date, default: Date.now }
    }
  ],
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
