const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/Admin");
const {
  GetAllSpecialities,
  GetSpecialityDetails,
  GetAllServices,
  GetCampaignDetails,
  GetAllCampaigns,
  Register,
  Login,
  InitiatePayment,
} = require("../Controller/User/User");

// router.route("/user/get-all-campaigns").get(GetAllCampaigns);
// router.route("/user/get-campaign-details/:link").get(GetCampaignDetails);

router.route("/user/get-all-specialties").get(GetAllSpecialities);
router.route("/user/get-speciality-details/:link").get(GetSpecialityDetails);
router.route("/user/get-all-services").get(GetAllServices);
router.route("/user/get-all-campaigns").get(GetAllCampaigns);
router.route("/user/get-campaign-details/:link").get(GetCampaignDetails);
router.route("/user/register").post(Register);
router.route("/user/login").post(Login);
router.route("/user/payu/hash").post(InitiatePayment);

module.exports = router;
