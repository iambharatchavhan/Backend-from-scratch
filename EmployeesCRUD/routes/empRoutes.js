const express = require('express')
const router = express.Router();
const {createEmployee} = require('../controllers/createEmployee')
const getAllEmployees = require('../controllers/getAllEmployee')
const getSingleEmployee = require('../controllers/getEmployeeById')



router.post('/create-employee', createEmployee)
router.get('/employees',getAllEmployees)
router.get('/getSingleEmployee/:id',getSingleEmployee)
module.exports = router