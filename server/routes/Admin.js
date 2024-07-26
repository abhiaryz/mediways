const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/Admin");
const {
  AdminLogin,
  CampaignNew,
  GetAllCampaigns,
  GetCampaignDetails,
  UpdateCampaignDetails,
} = require("../controller/Admin");
const multer = require("multer");

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define routes
router.route("/admin/login").post(AdminLogin);

router.post(
  "/admin/campaign-new",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "carouselImages", maxCount: 5 },
  ]),
  requireAuth,
  CampaignNew
);
router.route("/admin/get-all-campaigns").get(requireAuth, GetAllCampaigns);
router
  .route("/admin/get-campaign-details/:link")
  .get(requireAuth, GetCampaignDetails);

router.put(
  "/admin/update-campaign-details/:link",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "carouselImages", maxCount: 5 },
  ]),
  UpdateCampaignDetails
);

module.exports = router;
