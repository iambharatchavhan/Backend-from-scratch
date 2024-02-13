const employeeData = require("../models/employee");

//Mapping to Model

const getAllData = async (req, res) => {
  try {
    const response = await employeeData.find({});

    res.status(200).json({
      success: true,
      data: response,
      message: "All data fetched",
    });
  } catch (error) {
    console.error(error);
    console.log(error.message);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: "All data fetched",
    });
  }
};

const getDataById = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await employeeData.findById({ _id: id });

    if (!response) {
      res.status(404).json({
        success: false,
        message: "Data Not Found",
      });
    }

    res.status(200).json({
      status: true,
      data: response,
      message: "fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: true,
      data: "internal server Error",
      message: error.message,
    });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const { employeeName, employeeRole, employeeSalary } = req.body;
  try {
    const response = await employeeData.findByIdAndUpdate(
      { _id: id },
      { employeeName, employeeRole, employeeSalary, updatedAt: Date.now() }
    );

    if (!response) {
      res.status(404).json({
        success: false,
        message: "Not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Data Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server Error",
      Error: error.message,
    });
  }
};



const deleteById = async (req,res) =>{
    const id = req.params.id

    try{
      
      const response = await employeeData.findByIdAndDelete({_id:id})
      if(!response){
        res.status(404).json({
          success:false,
          message: "Data Not Found",
        })
      }
      res.status(200).json({
        success:true,
        message:"Deleted Successfully"
      })
    }catch(e){
       res.status(500).json({
          success:false,
          message:"internal server error"
       })
    }

}

module.exports = { getAllData, getDataById, updateById, deleteById};
