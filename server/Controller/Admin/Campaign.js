const adminModel = require("../../Model/Admin");
const campaignModel = require("../../Model/Campaign");
const specialityModel = require("../../Model/Speciality");
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
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

dotenv.config({ path: path.join(__dirname, "..", "..", "api", ".env") });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

exports.CampaignNew = async (req, res, next) => {
  try {
    const { title, status, amount, beneficiaryName } = req.body;
    // Generate a proper ID from the title
    const link = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .substring(0, 50);
    const prefix = "CAMPAIGN";
    const uniquePart = uuidv4().replace(/-/g, "").substr(0, 6);
    const id = `${prefix}${uniquePart}`;

    // Handle thumbnail upload
    let thumbnailUrl = null;
    if (req.files["thumbnail"]) {
      const thumbnailFile = req.files["thumbnail"][0];
      const thumbnailKey = `campaigns/${id}/thumbnail/thumbnail${path.extname(
        thumbnailFile.originalname
      )}`;
      thumbnailUrl = await UploadImgToS3(
        thumbnailKey,
        thumbnailFile.buffer,
        thumbnailFile.originalname
      );
    }

    // Handle carousel images upload
    const carouselImageUrls = [];
    let carouselImageUrl = null;
    if (req.files["carouselImages"]) {
      for (const file of req.files["carouselImages"]) {
        const carouselImageKey = `campaigns/${id}/carouselImages/${file.originalname}`;
        carouselImageUrl = await UploadImgToS3(
          carouselImageKey,
          file.buffer,
          file.originalname
        );
        carouselImageUrls.push(carouselImageUrl);
      }
    }

    // Create a new Campaign document
    const newCampaign = new campaignModel({
      title,
      id,
      link,
      beneficiaryName,
      status,
      amount,
      content: "",
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

exports.GetAllCampaigns = async (req, res, next) => {
  try {
    const campaigns = await campaignModel.find({}, "title thumbnail id link");

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
    const campaign = await campaignModel.findOne({ link });
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    return res.status(200).json({
      campaign,
    });
  } catch (error) {
    console.error("Error fetching campaign details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.UpdateCampaignDetails = async (req, res) => {
  let { link } = req.params;
  const { title, status, amount, beneficiaryName, content, imagesToDelete } =
    req.body;

  try {
    const campaign = await campaignModel.findOne({ link });

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    link = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .substring(0, 50);

    // Update text fields
    campaign.link = link;
    campaign.title = title;
    campaign.status = status;
    campaign.amount = amount;
    campaign.beneficiaryName = beneficiaryName;
    campaign.content = content;
    campaign.lastUpdate = moment().format("MMMM Do YYYY, h:mm:ss a");

    // Update thumbnail if present
    if (req.files.thumbnail) {
      // Delete the old thumbnail from S3
      if (campaign.thumbnail) {
        const oldThumbnailKey = campaign.thumbnail.split(".com/")[1];
        await DeleteImgfromS3(oldThumbnailKey);
      }
      const thumbnail = req.files.thumbnail[0];
      const thumbnailKey = `campaigns/${
        campaign.id
      }/thumbnail/thumbnail${path.extname(thumbnail.originalname)}`;
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
        const oldImageKey = image.split(".com/")[1];
        await DeleteImgfromS3(oldImageKey);
      }
      const carouselImages = req.files.carouselImages;
      const carouselUrls = await Promise.all(
        carouselImages.map((item) => {
          const carouselImageKey = `campaigns/${campaign.id}/carouselImages/${item.originalname}`;
          return UploadImgToS3(
            carouselImageKey,
            item.buffer,
            item.originalname
          );
        })
      );
      campaign.carousel = carouselUrls;
    }

    // Delete images from content
    if (imagesToDelete) {
      const parsedImagesToDelete = JSON.parse(imagesToDelete || "[]");
      for (const imageUrl of parsedImagesToDelete) {
        try {
          const key = new URL(imageUrl).pathname.substring(1);
          await DeleteImgfromS3(key);
        } catch (error) {
          console.error(`Failed to parse URL: ${imageUrl}`, error);
        }
      }
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

exports.UploadCampaignImgtoS3 = async (req, res) => {
  const { link } = req.params;
  try {
    const campaign = await campaignModel.findOne({ link });

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    if (req.files.image) {
      const image = req.files.image[0];
      const originalname = image.originalname
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .substring(0, 50);

      const campaignImageKey = `campaigns/${campaign.id}/campaignImages/${originalname}`;

      const campaignImageUrl = await UploadImgToS3(
        campaignImageKey,
        image.buffer,
        image.originalname
      );

      campaign.content = campaign.content + `<img src="${campaignImageUrl}" />`;
      await campaign.save();

      res
        .status(200)
        .json({ message: "Image uploaded successfully", campaignImageUrl });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.GetCampaignImgPresignedUrl = async (req, res) => {
  const { link } = req.params;
  const { key } = req.body;
  try {
    if (key) {
      const signedImageUrl = await GetSignedUrl(key);
      res
        .status(200)
        .json({ message: "Image uploaded successfully", url: signedImageUrl });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.DeleteCampaign = async (req, res) => {
  const { link } = req.params; // Ensure this matches the route parameter name
  const { password } = req.body;

  try {
    const admin = await adminModel.findOne({ email: req.admin.email });
    if (!admin) {
      return res.status(401).json({ error: "User not found" });
    }
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      // AlertEmail(emailId, "Login to Admin Panel with wrong credentials");
      return res.status(400).json({
        error: "wrong password",
      });
    }
    const campaign = await campaignModel.findOne({ link });

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    // Parse the campaign content to extract image URLs
    const { content } = campaign;
    const dom = new JSDOM(content);
    const images = dom.window.document.getElementsByTagName("img");

    // Delete each image from S3
    for (let img of images) {
      const imgUrl = img.src;
      console.log(new URL(imgUrl).pathname.substring(1));
      const Key = imgUrl.split(".com/")[1];
      console.log(Key);
      await DeleteImgfromS3(Key);
    }

    // Delete thumbnail from S3
    if (campaign.thumbnail) {
      const thumbnailKey = campaign.thumbnail.split(".com/")[1];
      await DeleteImgfromS3(thumbnailKey);
    }

    // Delete carousel images from S3
    for (const carousel of campaign.carousel) {
      if (carousel) {
        const carouselKey = carousel.split(".com/")[1];
        await DeleteImgfromS3(carouselKey);
      }
    }

    // Delete the campaign from the database
    await campaignModel.findOneAndDelete({  link });

    res
      .status(200)
      .json({ message: "Campaign deleted successfully", campaign });
  } catch (error) {
    console.error("Error deleting campaign:", error);
    res.status(500).json({ error: "Failed to delete campaign" });
  }
};
