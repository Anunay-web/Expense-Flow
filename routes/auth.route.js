const express  = require('express');
const router = express.Router();
const {registerUser,verifyUserOTP ,loginUser} = require('../controllers/authController');
const { protect } = require("../middleware/authMiddleware");

router.post("/register", protect, registerUser);
router.post("/verify-otp", verifyUserOTP);
router.post('/login', loginUser);

module.exports = router;