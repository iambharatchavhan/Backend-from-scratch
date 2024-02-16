const express = require('express');
const app = express();
const DatabaseConnection = require('./config/database')
const createPost = require('./routes/blogsRoute')
const allBlogs = require('./routes/blogsRoute')
const addComment = require('./routes/blogsRoute')
require('dotenv').config()
const port = process.env.PORT || 4000;

app.use(express.json())





app.use('/api/v1/',createPost)
app.use('/api/v1/',allBlogs)
app.use('/api/v1/',addComment)
app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to blog post app</h1>`)
})

app.listen(port,()=>{
    console.log("server is successfully running on port" +" "+ port)
})


DatabaseConnection();