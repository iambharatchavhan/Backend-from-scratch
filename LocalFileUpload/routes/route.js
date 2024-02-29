const express = require('express')
const router = express.Router()

const fileUpload = require('../controllers/fileUpload')


router.post("/local-file" , fileUpload)



module.exports = router;