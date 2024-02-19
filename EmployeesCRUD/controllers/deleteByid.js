
const EmployeeData = require('../models/employeModel')


const deleteById = async (req,res)=>{
    try {
        const {id} = req.params

        const response = await EmployeeData.findByIdAndDelete({_id:id})

        res.status(200).json({
            data:response,
            message:"Data deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            message:error.message

        })
    }
}

module.exports = deleteById;