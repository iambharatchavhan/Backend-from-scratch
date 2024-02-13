const express = require('express')
const app = express();
const employeeRoute = require('./routes/employeeRoute')
const getAllData= require('./routes/employeeRoute')
const getDataById = require('./routes/employeeRoute')
const updateById = require('./routes/employeeRoute')
const deleteById = require('./routes/employeeRoute')


require('dotenv').config()
const port = process.env.PORT || 4000


app.use(express.json())

// Mapping to route 
app.use('/api/v2/', employeeRoute )
app.use('/api/v2/', getAllData )
app.use('/api/v2/',getDataById)
app.use('/api/v2/',updateById)
app.use('/api/v2/',deleteById)





app.get('/',(req,res)=>{
   
    res.send(`<h1>HOMEPAGE</h1>`)

})

app.listen(port,()=>{
    console.log(`App is up and running at port number ${port}`)
})

// connecting to database 
const DbConnect = require('./config/database') 
DbConnect();