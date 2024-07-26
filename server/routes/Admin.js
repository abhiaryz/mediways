const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/Admin");
const { AdminLogin, CampaignNew } = require("../controller/Admin");
const multer = require("multer");

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define routes
router.route("/admin/login").post(AdminLogin);

router.post(
  '/admin/campaign-new',
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'carouselImages', maxCount: 5 },
  ]),
  CampaignNew
);

module.exports = router;
