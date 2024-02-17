const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

const addComment = async (req, res) => {
  try {
    const { post, user, comment } = req.body;

    const myComment = new Comment({
      post,
      user,
      comment,
    });

    const savedComment = await myComment.save();
    // add entry use $push
    // const updatedPost = await Post.findByIdAndUpdate(post,{ $push: { comments: savedComment._id } },{ new: true }).populate("comments").exec();
    const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true}  )
    .populate("comments") //populate the comments array with comment documents
    .exec();
 res.status(200).json({
    data:updatedPost
 })



  } catch (e) {

    res.status(500).json({
        success:false,
        data:e.message,
        message:"Internal server Error While Creating Post"
      })

  }
};

module.exports = addComment;