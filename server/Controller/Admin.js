const adminModel = require("../Model/Admin");
const campaignModel = require("../Model/Campaign");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const moment = require("moment");
const { AlertEmail } = require("../utils/mail/AlertEmail");
const { ErrorEmail } = require("../utils/mail/ErrorEmail");
const { uploadImgToS3 } = require("../utils/uploads/aws_s3");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const process = require("process");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const s3 = require("../config/aws_s3"); // Update the import statement to correctly match the export
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

// const main = async () => {
//   const command = new PutObjectCommand({
//     Bucket: "mediways",
//     Key: "uploads/hello_s3.mp4", // Ensure a full file path within the bucket
//     Body: "Hello S3!",
//     ContentType: "video/mp4",
//   });

//   try {
//     const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); // Specify expiration time
//     console.log("Signed URL:", url);
//   } catch (err) {
//     console.error("Error generating signed URL:", err);
//   }
// };

// main();

dotenv.config({ path: path.join(__dirname, "..", "api", ".env") });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

exports.AdminLogin = async (req, res, next) => {
  const { emailId, password } = req.body;

  try {
    if (!validator.isEmail(emailId)) {
      return res.status(400).json({
        error: "enter a valid email",
      });
    }
    const admin = await adminModel.findOne({ email: emailId });

    if (!admin) {
      return res.status(401).json({
        error: "wrong email or password",
      });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      // AlertEmail(emailId, "Login to Admin Panel with wrong credentials");
      return res.status(400).json({
        error: "wrong email or password",
      });
    }

    const token = jwt.sign(
      { userId: admin._id, email: admin.email },
      process.env.ADMINJWTSECRET
    );

    res.status(200).json({
      email: admin.email,
      token: token,
    });
  } catch (error) {
    // ErrorEmail(emailId, "Login as Admin");
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

exports.CampaignNew = async (req, res, next) => {
  try {
    const { title, status, amount, beneficiaryName } = req.body;
    console.log("Carousel Images", req.files["carouselImages"]);
    // Generate a proper ID from the title
    const id = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .substring(0, 50);

    // Handle thumbnail upload
    let thumbnailUrl = null;
    if (req.files["thumbnail"]) {
      const thumbnailFile = req.files["thumbnail"][0];
      const thumbnailKey = `${id}/thumbnail/thumbnail`;
      await uploadImgToS3(
        thumbnailKey,
        thumbnailFile.buffer,
        thumbnailFile.originalname
      );
      thumbnailUrl = `https://${process.env.AWS_STORAGE_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION_NAME}.amazonaws.com/${thumbnailKey}`;
    }

    // Handle carousel images upload
    const carouselImageUrls = [];
    if (req.files["carouselImages"]) {
      console.log(req.files["carouselImages"]);
      for (const file of req.files["carouselImages"]) {
        const carouselImageKey = `${id}/carouselImages/${file.originalname}`;
        await uploadImgToS3(carouselImageKey, file.buffer, file.originalname);
        const imageUrl = `https://${process.env.AWS_STORAGE_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION_NAME}.amazonaws.com/${carouselImageKey}`;
        carouselImageUrls.push(imageUrl);
      }
    }

    // Create a new Campaign document
    const newCampaign = new campaignModel({
      title,
      id,
      beneficiaryName,
      status,
      amount,
      thumbnail: thumbnailUrl,
      carousel: carouselImageUrls,
      createdAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
      lastUpdate: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });

    // Save the new Campaign document to the database
    await newCampaign.save();

    // Send response back to client
    res.status(200).json({
      message: "Campaign created successfully",
      data: {
        title,
        status,
        amount,
        beneficiaryName,
        thumbnail: thumbnailUrl,
        carouselImages: carouselImageUrls,
      },
    });
  } catch (error) {
    console.error("Error processing form data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
