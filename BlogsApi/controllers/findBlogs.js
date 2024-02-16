const BlogPost = require('../models/blogmodel')


const allBlogs = async(req,res)=> {
   
    try {
        const response = await BlogPost.find({}) 

        if(!response){
            res.status(404).json({
                success:false,
                data:"Not Found",
                message:"Data Not Found"
            })
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"All data Fetched successfully"
        })
       

    } catch (error) {

          console.log(error.message)
         res.status(500).json({
            success:false,
            data:error.message,
            message:"Internal server error"
         })
        
    }
    

}

module.exports = allBlogs;