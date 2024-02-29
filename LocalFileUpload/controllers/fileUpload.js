const FileModel = require('../models/fileModel')


const fileUpload = async(req,res)=>{
  try {
    
    const file = req.files.file
    console.log("file has been arrived==>",file)

    let path = __dirname + "/files/" + Date.now() + `${file.name}`

    file.mv(path,(error)=>{
        console.log(error)
    })

    
    res.status(200).json({
        success: true,
        message: "file uploaded successfully"
    })


  } catch (error) {
    
    res.status(500).json({
        success: false,
        message: "internal server error",
        error: error.message
    })

  }

}


module.exports = fileUpload