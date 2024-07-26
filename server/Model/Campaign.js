const mongoose = require("mongoose");
const moment = require("moment");

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    unique: true,
    required: true,
  },
  beneficiaryName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["private", "public"],
    default: "private",
  },
  amount: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String, // Assuming this will store the image URL
    required: true,
  },
  carousel: {
    type: [String], // Array of strings to store image URLs
    default: [],
  },
  content: {
    type: String, // Store large text content
  },
  createdAt: {
    type: String,
    default: () => moment().format("MMMM Do YYYY, h:mm:ss a"),
    immutable: true,
  },
  lastUpdate: {
    type: String,
    default: () => moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
