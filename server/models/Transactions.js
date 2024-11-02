const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  // Using email instead of ObjectId
  userId: {
    type: String,
    required: true,
    ref: "User", // Still keeping the ref for potential population
  },

  // Using custom campaign ID instead of ObjectId
  campaignId: {
    type: String,
    required: true,
    ref: "Campaign", // Still keeping the ref for potential population
  },

  amount: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },

  txnid: {
    type: String,
    unique: true,
    required: true,
  },

  paymentId: String,
  payuResponse: Object,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
