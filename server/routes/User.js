const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/Admin");
const { GetAllSpecialities, GetSpecialityDetails } = require("../Controller/User/User");

// router.route("/user/get-all-campaigns").get(GetAllCampaigns);
// router.route("/user/get-campaign-details/:link").get(GetCampaignDetails);

router.route("/user/get-all-specialties").get(GetAllSpecialities);
router.route("/user/get-speciality-details/:link").get(GetSpecialityDetails);

module.exports = router;
