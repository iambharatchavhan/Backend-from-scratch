const EmployeeData = require("../models/employeModel");

exports.createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, age,gender, salary } = req.body;

    
    const data = await EmployeeData.create({
        firstName,
        lastName,
        age,
        gender,
        salary,
      });

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

