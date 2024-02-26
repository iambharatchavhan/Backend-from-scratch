const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const userSignUp = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;
    // check all details are filled properly
    if (!name || !email || !password || !role) {
      res.status(401).json({
        success: false,
        message: "please fill the details properly",
      });
    }

    // check if email is already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).json({
        success: false,
        message: "email is already exist please try to login",
      });
    }
    // hash password using bcrypt
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

   await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.status(200).json({
      success: true,
      message: "Signed Up Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

module.exports = userSignUp;
