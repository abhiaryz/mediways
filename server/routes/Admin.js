const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/Admin");
const { AdminLogin } = require("../controller/Admin");

// Existing routes
router.route("/admin/login").post(AdminLogin);

module.exports = router;
