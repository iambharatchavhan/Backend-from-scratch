const mongoose = require('mongoose')
require('dotenv').config()

const DbConnection = async()=> {
     
    try {
        
        await mongoose.connect(process.env.DB_URL)
        console.log("connected successfully");
          
    } catch (error) {
       console.log(error.message)
       process.exit(1)
        
    }
   
}

module.exports = DbConnection;