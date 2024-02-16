const mongoose = require("mongoose");

const blgPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  description: {
    type: String,
    required: true,
  },

  comment: [
    {
      title: {
        type: String,
        require: true,
      },
      commentedAt:{
        type:Date,
        default:Date.now()
      }
    },
  ],


  likes: {
    type: Number,
    default: 0
  },

  registeredAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});


const BlogPost = mongoose.model('BlogPost',blgPostSchema)

module.exports = BlogPost;
