const Post = require('../models/postModel')


const createPost = async (req,res)=> {
      try {
        const {title,body} = req.body

        const post = new Post({
            title,body
        })

      const savedPost = await post.save()

      res.status(200).json({
        success:true,
        data:savedPost,
        message:"Post created SuccessFully"
      })



      } catch (error) {

         res.status(500).json({
        success:false,
        data:error.message,
        message:"Internal server Error While Creating Post"
      })

      }


}

const findAllPost = async (req,res)=>{
  try{
    // const posts = await Post.find().populate("likes").populate("comments").exec();

    const response = await Post.find().populate("likes").populate("comments").exec();
    if(!response){
      const response =  await Post.find({})
      res.json({
        data:response
      })

      if(!response){
        res.status(404).json({
          message:"data not found"
        })
      }
  
    }

    res.json({
      data:response
    })

  }catch(error){
    res.status(500).json({
      success:false,
      data:error.message,
      message:"Internal server Error While Accessing Post"
    })

  }

}





module.exports = {createPost,findAllPost}