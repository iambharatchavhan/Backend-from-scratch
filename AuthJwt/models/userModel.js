const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },
    role:{
      type:String,
      require:true,
      enum:["Admin","Student","Visitor"]

    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    
  });
  
  const User = mongoose.model('User', userSchema);

  
  module.exports = User;
