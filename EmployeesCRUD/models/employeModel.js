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
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
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