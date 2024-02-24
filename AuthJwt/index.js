const express = require('express')
const app = express()

require('dotenv').config()
port = process.env.PORT


app.use(express.json());


app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to auth app</h1>`)
})





app.listen(port,()=>{
    console.log(`app is running on port number ${port}`)
})