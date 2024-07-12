const adminModel = require("../Model/Admin");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const moment = require("moment");
const { AlertEmail } = require("../utils/AlertEmail");
const { ErrorEmail } = require("../utils/ErrorEmail");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const process = require("process");

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
      AlertEmail(emailId, "Login to Admin Panel with wrong credentials");
      return res.status(400).json({
        error: "wrong email or password",
      });
    }

    const token = jwt.sign(
      { userId: admin._id, email: admin.email },
      process.env.ADMINJWTSECRETisefgergfergerg
    );

    res.status(200).json({
      email: admin.email,
      token: token,
    });
  } catch (error) {
    ErrorEmail(emailId, "Login as Admin");
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
