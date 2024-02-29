 const mongoose = require('mongoose')
 require('dotenv').config()

const dbConnect = async () =>{
    try {
        
    await mongoose.connect(process.env.MONGODB_URL,{})
     console.log("connected to database successfully")
    //  process.exit(1)

    } catch (error) {    
     console.log("error while connecting to the database ")
     console.log(error.message)
    }
}

module.exports = dbConnect