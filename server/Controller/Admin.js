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
const { UploadImgToS3 } = require("../utils/aws_s3/UploadImgToS3");
const { DeleteImgfromS3 } = require("../utils/aws_s3/DeleteImgfromS3");
const { GetSignedUrl } = require("../utils/aws_s3/GetSignedUrl");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const process = require("process");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const s3 = require("../config/aws_s3"); // Update the import statement to correctly match the export

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
    // Generate a proper ID from the title
    const id = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .substring(0, 50);

    // Handle thumbnail upload
    let thumbnailKey = null;
    if (req.files["thumbnail"]) {
      const thumbnailFile = req.files["thumbnail"][0];
      thumbnailKey = `${id}/thumbnail/thumbnail${path.extname(
        thumbnailFile.originalname
      )}`;
      await UploadImgToS3(
        thumbnailKey,
        thumbnailFile.buffer,
        thumbnailFile.originalname
      );
    }

    // Handle carousel images upload
    const carouselImageKeys = [];
    if (req.files["carouselImages"]) {
      for (const file of req.files["carouselImages"]) {
        const carouselImageKey = `${id}/carouselImages/${file.originalname}`;
        await UploadImgToS3(carouselImageKey, file.buffer, file.originalname);
        carouselImageKeys.push(carouselImageKey);
      }
    }

    // Create a new Campaign document
    const newCampaign = new campaignModel({
      title,
      id,
      beneficiaryName,
      status,
      amount,
      thumbnail: thumbnailKey,
      carousel: carouselImageKeys,
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
        thumbnail: thumbnailKey,
        carouselImages: carouselImageKeys,
      },
    });
  } catch (error) {
    console.error("Error processing form data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.GetAllCampaigns = async (req, res, next) => {
  try {
    const campaigns = await campaignModel.find({}, "title thumbnail id");
    // Generate presigned URLs for the thumbnails
    const campaignsWithUrls = await Promise.all(
      campaigns.map(async (campaign) => {
        const thumbnailUrl = await GetSignedUrl(campaign.thumbnail);
        return {
          ...campaign.toObject(),
          thumbnailUrl,
        };
      })
    );
    res.status(200).json({ campaigns: campaignsWithUrls });
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
    const campaign = await campaignModel.findOne({ id: link });

    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    const signedThumbnailUrl = await GetSignedUrl(campaign.thumbnail);
    const signedCarouselUrls = await Promise.all(
      campaign.carousel.map(async (imageKey) => await GetSignedUrl(imageKey))
    );
    return res.status(200).json({
      campaignDetail: {
        ...campaign.toObject(),
        thumbnail: signedThumbnailUrl,
        carousel: signedCarouselUrls,
      },
    });
  } catch (error) {
    console.error("Error fetching campaign details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.UpdateCampaignDetails = async (req, res) => {
  const { link } = req.params;
  const { title, status, amount, beneficiaryName, description } = req.body;

  try {
    const campaign = await campaignModel.findOne({ id: link });

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    // Update text fields
    campaign.title = title;
    campaign.status = status;
    campaign.amount = amount;
    campaign.beneficiaryName = beneficiaryName;
    campaign.description = description;

    // Update thumbnail if present
    if (req.files.thumbnail) {
      // Delete the old thumbnail from S3
      if (campaign.thumbnail) {
        await DeleteImgfromS3(campaign.thumbnail);
      }
      const thumbnail = req.files.thumbnail[0];
      const thumbnailKey = `${link}/thumbnail/thumbnail${path.extname(
        thumbnail.originalname
      )}`;
      const thumbnailUrl = await UploadImgToS3(
        thumbnailKey,
        thumbnail.buffer,
        thumbnail.originalname
      );
      campaign.thumbnail = thumbnailUrl;
    }

    // Update carousel images if present
    if (req.files.carouselImages) {
      // Delete old carousel images from S3
      for (const image of campaign.carousel) {
        await DeleteImgfromS3(image);
      }
      const carouselImages = req.files.carouselImages;
      const carouselUrls = await Promise.all(
        carouselImages.map((item) => {
          const carouselImageKey = `${link}/carouselImages/${item.originalname}`;
          return UploadImgToS3(
            carouselImageKey,
            item.buffer,
            item.originalname
          );
        })
      );
      campaign.carousel = carouselUrls;
    }

    await campaign.save();

    res
      .status(200)
      .json({ message: "Campaign updated successfully", campaign });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
