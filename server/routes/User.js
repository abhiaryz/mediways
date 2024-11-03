const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/User");
const {
  GetAllSpecialities,
  GetSpecialityDetails,
  GetAllServices,
  GetCampaignDetails,
  GetAllCampaigns,
  Register,
  Login,
  InitiatePayment,
  GetMyAccount,
  confirmTransaction,
  PaymentSuccess,
  PaymentFailure,
} = require("../Controller/User/User");
const verifyPayUHash = require('../middleware/PayUVerification');

router.route("/user/get-all-specialties").get(GetAllSpecialities);
router.route("/user/get-speciality-details/:link").get(GetSpecialityDetails);
router.route("/user/get-all-services").get(GetAllServices);
router.route("/user/get-all-campaigns").get(GetAllCampaigns);
router.route("/user/get-campaign-details/:link").get(GetCampaignDetails);
router.route("/user/register").post(Register);
router.route("/user/login").post(Login);
router.route("/user/payu/hash").post(requireAuth, InitiatePayment);
router.route("/user/my-account").get(requireAuth, GetMyAccount);
router
  .route("/user/payment-success")
  .post(
    express.urlencoded({ extended: true }),
    verifyPayUHash,
    PaymentSuccess
  );
router
  .route("/user/payment-failure")
  .post(
    express.urlencoded({ extended: true }),
    verifyPayUHash,
    PaymentFailure
  );

module.exports = router;
