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
     }
    }
    )

    module.exports = mongoose.model("EmployeeSchema", employeeSchema);