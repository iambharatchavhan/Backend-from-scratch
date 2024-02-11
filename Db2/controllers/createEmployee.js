const Employee = require('../models/Employee')



exports.createEmployee = async (req,res)=> {
  try{
   
    const {employeeName,employeeRole,employeeSalary } = req.body;
    
    const response = await Employee.create({
        employeeName,employeeRole,employeeSalary    
    })

    res.status(200).json({
        success: true,
        data: response,
        message: "Employee created success"
    })

  }catch(err){
    res.status(500).json({
        success:false,
        data: "Internal server Error",
        message:err.message
    })

  }

}