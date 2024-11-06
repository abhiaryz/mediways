const adminModel = require("../../models/Admin");
const campaignModel = require("../../models/Campaign");
const specialityModel = require("../../models/Speciality");
const serviceModel = require("../../models/Services");
const userModel = require("../../models/User");
const transactionModel = require("../../models/Transactions");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const moment = require("moment");
const { AlertEmail } = require("../../utils/mail/AlertEmail");
const { ErrorEmail } = require("../../utils/mail/ErrorEmail");
const { UploadImgToS3 } = require("../../utils/aws_s3/UploadImgToS3");
const { DeleteImgfromS3 } = require("../../utils/aws_s3/DeleteImgfromS3");
const { GetSignedUrl } = require("../../utils/aws_s3/GetSignedUrl");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const process = require("process");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const s3 = require("../../config/aws_s3");
const crypto = require("crypto");
const { sendPaymentEmail } = require("../../utils/mail/PaymentEmail");

dotenv.config({ path: path.join(__dirname, "..", "..", "api", ".env") });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

exports.GetAllSpecialities = async (req, res, next) => {
  try {
    const specialities = await specialityModel.find(
      {},
      "title icon id desc link"
    );

    res.status(200).json({ specialities });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.GetSpecialityDetails = async (req, res, next) => {
  const { link } = req.params;

  try {
    const speciality = await specialityModel.findOne({ link });
    if (!speciality) {
      return res.status(404).json({ message: "Speciality not found" });
    }
    return res.status(200).json({
      speciality,
    });
  } catch (error) {
    console.log("Error fetching speciality details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.GetAllServices = async (req, res, next) => {
  try {
    const services = await serviceModel.find({}, "title icon id desc link");

    res.status(200).json({ services });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.GetAllCampaigns = async (req, res, next) => {
  try {
    const campaigns = await campaignModel.find(
      { status: "public" }, // Filter for public campaigns
      "title id link beneficiaryName thumbnail amount amountDonated taxBenefit"
    );

    res.status(200).json({ campaigns });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.GetCampaignDetails = async (req, res, next) => {
  const { link } = req.params;

  try {
    const campaign = await campaignModel.findOne({ link, status: "public" });
    if (!campaign) {
      return res
        .status(404)
        .json({ message: "Campaign not found or not public" });
    }
    return res.status(200).json({ campaign });
  } catch (error) {
    console.log("Error fetching campaign details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.Register = async (req, res, next) => {
  const userdata = req.body;

  try {
    if (!validator.isEmail(userdata.email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }
    if (!validator.isStrongPassword(userdata.password)) {
      return res.status(400).json({
        error:
          "Weak password. Must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      });
    }

    const existingUser = await userModel.findOne({ email: userdata.email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userdata.password, salt);

    const user = new userModel({
      username: userdata.username,
      email: userdata.email,
      password: hash,
      createdAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });

    const newUser = await user.save();

    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username, email: newUser.email },
      process.env.USERJWTSECRET
    );

    res.status(200).json({
      email: newUser.email,
      username: newUser.username,
      token: token,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send({ error: "Failed to register user" });
  }
};

exports.Login = async (req, res, next) => {
  const userdata = req.body;

  try {
    if (!validator.isEmail(userdata.email)) {
      return res.status(400).send("Enter a valid email");
    }
    const existingUser = await userModel.findOne({ email: userdata.email });
    if (!existingUser) {
      return res.status(400).json({ error: "Wrong email or password" });
    }
    const match = await bcrypt.compare(
      userdata.password,
      existingUser.password
    );
    if (!match) {
      return res.status(400).json({ error: "Wrong email or password" });
    }

    const jwttoken = jwt.sign(
      {
        userId: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
      process.env.USERJWTSECRET
    );

    res.status(200).json({
      email: existingUser.email,
      username: existingUser.username,
      token: jwttoken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops! Please try again later" });
  }
};

exports.GetMyAccount = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id).select("-password");

    // Get user's transactions with only essential fields
    const transactions = await transactionModel
      .find({ userId: req.user._id })
      .select("amount status txnid paymentDetails createdAt")
      .populate("campaignId", "title link")
      .sort({ createdAt: -1 });

    res.status(200).json({
      user,
      transactions,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.InitiatePayment = async (req, res, next) => {
  const { username, email, amount, campaignId } = req.body;

  try {
    const txnid = `TXN${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const transaction = new transactionModel({
      userId: req.user._id,
      campaignId: campaignId,
      amount: amount,
      status: "pending",
      txnid: txnid,
    });

    await transaction.save();

    const key = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_SALT;
    const productinfo = "Donation";
    const firstname = username;

    // Simplified hash generation
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    res.status(200).json({
      hash,
      txnid,
      key,
      amount,
      productinfo,
      firstname,
      email,
      surl: `${process.env.BACKEND_URL}/user/payment-success`,
      furl: `${process.env.BACKEND_URL}/user/payment-failure`,
    });
  } catch (error) {
    console.error("Error initiating payment:", error);
    res.status(500).json({ error: "Payment initiation failed" });
  }
};

exports.PaymentSuccess = async (req, res) => {
  try {
    const { txnid, mihpayid, mode, bankcode, cardnum, error_Message, amount } =
      req.body;

    // Find and update transaction with essential info only
    const transaction = await transactionModel.findOneAndUpdate(
      { txnid, status: "pending" },
      {
        status: "success",
        paymentDetails: {
          paymentId: mihpayid,
          mode: mode,
          bankName: bankcode || undefined,
          cardLastDigits: cardnum ? cardnum.slice(-4) : undefined,
          failureReason: error_Message,
          timestamp: new Date(),
        },
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!transaction) {
      console.error("Transaction not found or already processed:", txnid);
      return res.redirect(`${process.env.FRONTEND_URL}/payment-failure`);
    }

    // Update campaign amount
    await campaignModel.findOneAndUpdate(
      { _id: transaction.campaignId },
      {
        $inc: { amountDonated: Number(amount) },
        $set: { lastUpdate: new Date() },
      }
    );

    // Fetch user details from the transaction
    const user = await userModel.findById(transaction.userId);

    await sendPaymentEmail({
      status: "success",
      name: user.username,
      email: user.email,
      amount: amount,
      txnId: txnid,
      date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      paymentMethod: mode,
      campaignTitle: transaction.campaignId.title,
      campaignLink: transaction.campaignId.link,
      taxBenefit: transaction.campaignId.taxBenefit?.isTaxBenefit,
    });

    res.redirect(`${process.env.FRONTEND_URL}/payment-success`);
  } catch (error) {
    console.error("Payment success error:", error);
    res.redirect(`${process.env.FRONTEND_URL}/payment-failure`);
  }
};

exports.PaymentFailure = async (req, res) => {
  try {
    const {
      txnid,
      mihpayid,
      status,
      mode,
      bankcode,
      bank_ref_num,
      error,
      error_Message,
      cardnum,
    } = req.body;

    // Update transaction status
    const transaction = await transactionModel.findOneAndUpdate(
      { txnid },
      {
        status: "failed",
        paymentId: mihpayid,
        mode: mode,
        bankcode: bankcode,
        bankref: bank_ref_num,
        cardMask: cardnum,
        error: error,
        errorMessage: error_Message,
        payuResponse: req.body,
        updatedAt: new Date(),
      }
    );

    // Fetch user details from the transaction
    const user = await userModel.findById(transaction.userId);

    await sendPaymentEmail({
      status: "failed",
      name: user.username,
      email: user.email,
      amount: amount,
      txnId: txnid,
      date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      errorMessage: error_Message,
      campaignTitle: transaction.campaignId.title,
      campaignLink: transaction.campaignId.link,
    });

    res.redirect(`${process.env.FRONTEND_URL}/payment-failure`);
  } catch (error) {
    console.error("Payment failure error:", error);
    res.redirect(`${process.env.FRONTEND_URL}/payment-failure`);
  }
};
