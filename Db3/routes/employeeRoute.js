const express = require('express')
const router = express.Router();

const createEmployee = require('../controller/createEmployee')
const {getAllData,getDataById,updateById,deleteById} = require('../controller/getEmployee')




//Mapping to Controller ==<

router.post('/create-employees', createEmployee)
router.get('/get-employees', getAllData)
router.get('/get-employeesById/:id', getDataById)
router.put('/update-employeeById/:id',updateById)
router.delete('/delete-employeeById/:id',deleteById)

module.exports = router;
