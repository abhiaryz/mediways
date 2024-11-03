const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "User",
  },

  campaignId: {
    type: String,
    required: true,
    ref: "Campaign",
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
  mode: String,
  bankcode: String,
  bankref: String,
  error: String,
  errorMessage: String,
  cardMask: String,
  payuResponse: {
    type: Object,
    default: {}
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

// Update timestamp on save
transactionSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
