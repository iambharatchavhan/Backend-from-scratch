const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    // fetched data from user
    let { email, password } = req.body;

    // check email and password are filled
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "please fill email and password correctly",
      });
    }

    // check user is registered
    let isRegisteredUser = await User.findOne({ email });
    if (!isRegisteredUser) {
      return res.status(401).json({
        success: false,
        message: "your not registered user please sign up",
      });
    }

    // check password is matching with the entered password
    const checkPasswords = await bcrypt.compare(
      password,
      isRegisteredUser.password
    );

    // create jwt token
    // for creating token need payload that want to send in user
    const payload = {
      email: isRegisteredUser.email,
      role: isRegisteredUser.role,
      id: isRegisteredUser._id,
    };

    if (checkPasswords) {
      let token = jwt.sign(payload, process.env.SECRET, { expiresIn: "2h" });

      isRegisteredUser = isRegisteredUser.toObject();
      isRegisteredUser.token = token;
      isRegisteredUser.password = undefined;

      const options = {
        expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // from now to 3 days
        httpOnly: true,
      };

      res.cookie("bearer", token, options).status(200).json({
        success: true,
        token,
        isRegisteredUser,
        message: "user logged in successfully",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "please provide correct password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "your not registered user please sign up",
    });
  }
};

module.exports = login