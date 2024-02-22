const express = require('express')
const router = express.Router();
const {createEmployee} = require('../controllers/createEmployee')
const getAllEmployees = require('../controllers/getAllEmployee')
const getSingleEmployee = require('../controllers/getEmployeeById')
const deleteById = require('../controllers/deleteByid')
const updateData = require('../controllers/updateEmpDetails')


router.post('/create-employee', createEmployee)
router.get('/employees',getAllEmployees)
router.get('/getSingleEmployee/:id',getSingleEmployee)
router.delete('/delete-employee/:id',deleteById)
router.put('/update/:id',updateData)    

module.exports = router