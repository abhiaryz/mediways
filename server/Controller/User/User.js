const adminModel = require("../../Model/Admin");
const campaignModel = require("../../Model/Campaign");
const specialityModel = require("../../Model/Speciality");
const serviceModel = require("../../Model/Services");
const userModel = require("../../Model/User");
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

    const token = jwt.sign({ userId: newUser._id }, process.env.USERJWTSECRET);

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
    const existingUser = await users.findOne({ email: userdata.email });
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
      { userId: existingUser._id },
      process.env.JWTSECRET
    );

    res.status(200).json({
      email: existingUser.email,
      username: existingUser.username,
      token: jwttoken,
      isVerified: existingUser.isVerified,
    });
  } catch (error) {
    sendErrorEmail(
      userdata.name,
      userdata.email,
      "User tried to login. Internal server error"
    );
    res.status(500).json({ error: "Oops! Please try again later" });
  }
};

exports.InitiatePayment = async (req, res, next) => {
  const { username, email,amount,txnid } = req.body;

  try {
    const key = process.env.PAYU_MERCHANT_KEY;
    const salt= process.env.PAYU_SALT;
    const productinfo = "Product Info";
    const firstname = username;

    function calculateHash(key,txnid,amount,productinfo,firstname,email,salt) {
      const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
      return crypto.createHash("sha512").update(hashString).digest("hex");
    };

    const data = { key, txnid, amount, productinfo, firstname, email, salt };
    const hash = calculateHash(
      key,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      salt
    );
    console.log(hash); // This should match the expected hash value

    res.status(200).json({ data, hash });
  } catch (error) {
    console.error("Error initiating payment:", error);
    res.status(500).json({ error: "Payment initiation failed" });
  }
};

exports.GetMyAccount = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
