const express = require('express');
const app = express();
const DatabaseConnection = require('./config/database')
const blog = require('./routes/blogsRoute')

require('dotenv').config()
const port = process.env.PORT || 4000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to blog post app</h1>`)
})

app.use('/api/v1/',blog)


app.listen(port,()=>{
    console.log("server is successfully running on port" +" "+ port)
})


DatabaseConnection();