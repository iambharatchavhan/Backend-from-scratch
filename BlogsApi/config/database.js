const mongoose = require("mongoose");
require('dotenv').config()



const DatabaseConnection = async () => {
  try {
    
    await mongoose.connect(process.env.DB_URL,{});
    console.log("connection successful");

  } catch (error) {
    console.log(error.message)
    console.log("Connection failed")
    process.exit(1);
  }
};

module.exports = DatabaseConnection;
