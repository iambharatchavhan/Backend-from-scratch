const mongoose = require('mongoose')


const commentSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    }

})

module.exports = mongoose.model("Comment",commentSchema)