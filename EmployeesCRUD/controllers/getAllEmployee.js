const EmployeeData = require('../models/employeModel')


const getAllEmployees = async(req,res)=>{
    try {
        
        const employeesData = await EmployeeData.find()
        res.status(200).json({
            data:employeesData
        })

    } catch (error) {

        res.status(500).json({
            message:error.message
        })
    }

}

module.exports = getAllEmployees