const express = require('express')
const dbConnect = require('./config/database')
const cloudConnect = require('./config/cloudinary')
const fileUpload = require('express-fileupload')
const uploadFiles = require('./routes/route')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 4000


// need some middlewares
 app.use(express.json())

 // Simple express middleware for uploading files.
 app.use(fileUpload(
//     {
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }
));

app.get('/', (req,res)=>{
     res.send('welcome to the homepage of file uploading (local)')

})


app.use('/api/v1/upload/',uploadFiles)


app.listen(port,()=>{
    console.log(`welcome , app is up and running on port ${port}`)
})

cloudConnect();
dbConnect();
