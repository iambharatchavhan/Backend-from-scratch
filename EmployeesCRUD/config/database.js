const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
    try{

      await mongoose.connect(process.env.DATABASE_LINK,{})
      console.log("Database connection successfully")

    }catch(error){
        console.log("message:",error.message)
        console.log("Database connection failed")
        
    }
}


module.exports = connect;