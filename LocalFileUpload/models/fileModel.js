const mongoose = require('mongoose')

const fileModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }


})

module.exports = mongoose.model("FileModel", fileModel)