const mongoose = require("mongoose");

require("dotenv").config();
const DataBaseConnection = async () => {
  try {
   await mongoose.connect(process.env.DATABASE_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connecting successfully")
  } catch (error) {
    console.log(error.message);
    console.log("connection issue :- please check your connection ")
    process.exit(1)
  }
};
 

module.exports = DataBaseConnection;