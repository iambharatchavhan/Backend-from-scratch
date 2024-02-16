const BlogPost = require('../models/blogmodel')



const createPost = async (req,res) =>{
  const {title,description} = req.body

  try{
    const response = await BlogPost.create({title,description})

    res.status(200).json({
        success:true,
        data:response,
        message:"Post created successfully"
    })
      

  }catch(error){

    console.log(error.message)
    res.status(500).json({
        success:false,
        data:error.message,
        message:"internal server error"
    })


  }

}

module.exports = createPost;