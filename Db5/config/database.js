const mongoose = require('mongoose')
require('dotenv').config()

const connectToDatabase = async() => {
     try {

        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database Connected Successfully")
        
     } catch (error) {
        console.error(error)
        console.log("Error While Connecting To The Database")
     }

}

module.exports = connectToDatabase;