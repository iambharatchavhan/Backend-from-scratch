const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18, 
    max: 60, 
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    min: 1, 
    max: 20, 
    required: true,
  },
createdAt:{
    type:Date,
    default:Date.now()
},
updatedAt:{
    type:Date,
    default:Date.now()
}

});

module.exports = mongoose.model("EmployeeData",employeeSchema)