const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");


const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

//register
exports.registerUser = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Only admin can create users",
      });
    }

    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // GENERATE OTP
    const otp = generateOTP();
    const hashedOtp = await bcrypt.hash(otp, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "employee",
      otp: hashedOtp,
      otpExpiry: Date.now() + 10 * 60 * 1000, // 10 min
      isVerified: false,
    });

    // SEND OTP EMAIL
    await sendEmail(
      email,
      "Verify Your Account - AuditFlow",
      `Your OTP is ${otp}. It will expire in 10 minutes.`
    );

    res.status(201).json({
      message: "User created & OTP sent to email",
      email: user.email,
    });

  } catch (error) {
    next(error);
  }
};

exports.verifyUserOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email }).select("+otp");
    if (!user || !user.otp) {
      return res.status(400).json({ message: "No OTP found" });
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    const isMatch = await bcrypt.compare(otp, user.otp);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    //  VERIFY USER
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    res.json({
      message: "Account verified successfully",
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


//login
exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user.isVerified) {
  return res.status(403).json({
    message: "Please verify your account via OTP",
  });
}

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};