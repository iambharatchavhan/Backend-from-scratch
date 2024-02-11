# Database Week One
- Created Basic Server
  - app.get
  - app.post
- Dependencies used 
  - express
  - body-parser
  - nodemon

# Database Week Two
- Dependencies 
  - mongoDB
  - mongoose
  - nodemon
  - .dotenv

- Creating Folder Structure
  - Folders 
    - config
    - controllers
    - models
    - routes
    - .env File

## Flow of code

- config
  - database.js
  - work : establish database connection
- model
  - schemas and models
  - work: predefine schemas for object

- controller
  - Each path has its own controller
  - work - create object and insert data into database
  - Steps Must follow -- async-await cos do not break main thread
    - importing schema model 
    - extract details from request body
    - creating a new object and insert into Database
    - send json response with status code 200


   - example of schema
    ```javascript
    
  const mongoose = require('mongoose')
  const employeeSchema = new mongoose.Schema(
    {
      employeeName:{
         type:String,
         required:true,
         maxLength:50,

      },
      employeeRole:{
          type:String,
          required:true,
          maxLength:50
      },
     employeeSalary:{
        type:Number,
        required:true,
     },
     registeredAt:{
        type:Date,
        required:true,
        default:Date.now()
     },
     updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
     }}
    )

   module.exports = mongoose.model("EmployeeSchema", employeeSchema)

    ```

 - route
 -for api versions
 ```javascript
app.use("/api/v1", employeeRoute)

 ```
 ```javascript
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

 ```

 - connecting to dataBase

 ## How File structure and codeFlow works
   
   - index.js <= mapped routes
   - routes.js <= mapped with controller
   - controller.js <= mapped with models
   


  ```javascript

const DbConnect =
  ```



## dotenv 
  must require to access environment

   ```javascript

   require("dotenv").config()

   ```  



 