const EmployeeData = require('../models/employeModel')


const getSingleEmployee = async (req,res) => {
    try {

        const {id} = req.params

        const response = await EmployeeData.findById({_id:id})

        res.status(200).json({
            data:response
        })
        
    } catch (error) {

        res.status(500).json({
            message:error.message
        })
        
    }
}

module.exports = getSingleEmployee