require('dotenv').config()
const cloudinary = require('cloudinary').v2

       

  const cloudConnect = () => {
   try {
      cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME ,
        api_key: process.env.CLOUD_KEY,
        api_secret: process.env.CLOUD_SECRET_KEY
      });
      
  console.log("connected to cloud");
   } catch (error) {
    console.log(error)

   }
  }

  module.exports = cloudConnect;


