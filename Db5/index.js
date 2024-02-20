const express = require('express')
const app = express();
const connectToDatabase = require('./config/database')
const users = require('./routes/userRoutes')

require('dotenv').config()
const port = process.env.PORT || 8080

app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`<h1>Authentication With JWT</h1>`)
})

app.use('/api/v1/',users)

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})

connectToDatabase();