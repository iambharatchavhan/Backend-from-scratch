const express = require('express')
const router = express.Router();
const {createEmployee} = require('../controllers/createEmployee')


router.post('/create-employee', createEmployee);


module.exports = router;


