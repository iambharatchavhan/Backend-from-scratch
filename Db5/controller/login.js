const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();

const loginUser = async (req, res) => {
  try {
    // step 1 Fetch Data form req ki body ---> email,password
    const { email, password } = req.body;

    // Check email and password entered by user
    if (!email || !password) {
      res.status(401).json({
        success: false,
        message:
          "email and password is required, please fill the details carefully",
      });
    }

    //check this user is signed in using email
    let user = await User.findOne({ email });
    // if not found send error message
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Your are not registered user please sing up",
      });
    }

    // if all ok then create payload to generate jwt token
    const payload = {
      email: user.email,
      role: user.role,
      id: user._id,
    };

    // comp password
    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(payload, process.env.SECRET, { expiresIn: "2h" });
      // token created suing two args payload and secret key
      // hide sensitive data from user
      // for that convert user into object
      user = user.toObject();
      user.token = token; // adding token into user
      user.password = undefined; // hide password form user object

      // all done

      // create cookies -- args need cookie name, token, option

      const options = {
        expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // from now to 3 days
        httpOnly: true,
      };
      // send cookies into response
      res.cookie("berar", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in successfully, Have a nice session",
      });
    } else {
      res.status(403).json({
        success: false,
        message: "password is in correct",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "failed to login",
    });
  }
};

module.exports = loginUser;