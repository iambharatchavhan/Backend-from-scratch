const mongoose = require('mongoose')


// 1 create Schemas in Model
const EmployeeTable = new mongoose.Schema(
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
       }
      })

      module.exports = mongoose.model("EmployeeTable", EmployeeTable)