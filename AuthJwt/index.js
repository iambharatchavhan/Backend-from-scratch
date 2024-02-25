const express = require('express')
const app = express()
const user = require('./routes/userRoutes')
const databaseConnection =require('./config/database')

require('dotenv').config()
const port = process.env.PORT || 3000


app.use(express.json());


app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to auth app</h1>`)
})

app.use('/api/v1/',user)

app.listen(port,()=>{
    console.log(`app is running on port number ${port}`)
})


// calling database
databaseConnection()