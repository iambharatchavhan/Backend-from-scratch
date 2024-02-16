const BlogPost = require('../models/blogmodel');

const addComment = async (req, res) => {
  const postId = req.params.id;
  const { title } = req.body;

  try {
    // Find the blog post by ID
    const blogPost = await BlogPost.findByIdAndUpdate({_id:postId});

    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }


    const newComment = blogPost.comment.push({
      title,commentedAt:Date.now()

    })

      res.status(200).json({
      success: true,
      data: blogPost.comment,
      message: 'Comment added successfully'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = addComment;
