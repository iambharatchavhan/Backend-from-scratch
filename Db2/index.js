const express = require('express')
const app = express();
require('dotenv').config()

const port = process.env.PORT || 4000;


app.use(express.json());

const employeeRoute = require('./routes/EmployeeRoute');

app.use("/api/v1", employeeRoute)


app.listen(port,()=>{
    console.log(`server is up and running on port ${port}`)
})


const DbConnect = require('./config/database')
DbConnect();