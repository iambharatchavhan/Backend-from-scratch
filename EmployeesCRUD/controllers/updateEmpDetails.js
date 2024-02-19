const EmployeeData = require('../models/employeModel')


const updateData = async(req,res)=>{
 try{
   const {id} = req.params
   const {firstName,lastName,age,gender,salary} = req.body
   const updatedData = await EmployeeData.findByIdAndUpdate({_id:id},{firstName,lastName,age,gender,salary,updatedAt:Date.now()},{new:true})
   
   res.status(200).json({
      data:updatedData,
      message:"data updated successfully"
   })

  

 }catch(error){

    res.status(500).json({
        message:error.message
    })
 }

}

module.exports = updateData;