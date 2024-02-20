const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRound = 10;

const createUser = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;

    // check user is already present in database
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exist try to login",
      });
    }
    // hashed password using bcrypt round 10

    const hashedPassword = await bcrypt.hash(password, saltRound);
    // password is hashed?
    if (!hashedPassword) {
      return res.status(404).json({
        success: false,
        message:"error while creating hashed password"
      });
    }
 
  const userCreated = await User.create({name, email, password:hashedPassword, role}) 
if(!userCreated){
    return res.status(404).json({
        success:false,
        message:"Error while creating user"
    })
}

res.status(200).json({
    success:true,
    message:"user created successfully"
})
   
  } catch (err) {
    res.status(500).json({
        success:false,
        error:err.message,
        message:"Internal server error"
    })
  }
};


module.exports = createUser;