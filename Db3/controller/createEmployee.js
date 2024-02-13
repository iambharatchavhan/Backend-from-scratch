const EmployeeTable = require("../models/employee");

const createEmployee = async (req, res) => {
  const { employeeName, employeeRole, employeeSalary } = req.body;

  try {
    const response = await EmployeeTable.create({
      employeeName,
      employeeRole,
      employeeSalary,
    });

    res.status(200).json({
      success: true,
      data:response,
      message: "Created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error:error.message,
      message: "Internal server error",
    });
  }
};


module.exports = createEmployee;
