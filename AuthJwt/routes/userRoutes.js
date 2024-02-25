const express= require('express')
const router = express.Router()

const userSignUp = require('../controller/singUp')



router.post('/sign-up', userSignUp);




module.exports = router;