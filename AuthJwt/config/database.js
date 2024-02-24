const mongoose = require("mongoose");
require("dotenv").config();

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {});
    console.log("connecting successfully");

  } catch (error) {
    console.log(error.message)

  }
};

module.exports = databaseConnection;