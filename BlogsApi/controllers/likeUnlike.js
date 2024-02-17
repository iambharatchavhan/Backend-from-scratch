const Post = require("../models/postModel");
const Like = require("../models/likeUnlikePostModel");

const addLike = async (req, res) => {
  try {
    const { post, user } = req.body;

    const addLikes = new Like({ post, user });
    const savedLike = await addLikes.save();

    const updatePost = await Post.findByIdAndUpdate(post,{$push: { likes: savedLike._id }},{ new: true }).populate("likes").exec();

    res.status(200).json({
      data: updatePost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
      message: "Internal server Error While liking",
    });
  }
};


const removeLike = async (req, res) => {
  try {
    const { post, like } = req.body;

    const deletedLike = Like.findOneAndDelete({ post: post, _id: like });

    const updatePost = await Post.findByIdAndUpdate(post,{ $pull: { likes: deletedLike._id } },{ new: true });

    res.json({
      data: updatePost,
      message:"deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
      message: "Internal server Error While unLiking",
    });
  }
};

module.exports = { addLike, removeLike };
