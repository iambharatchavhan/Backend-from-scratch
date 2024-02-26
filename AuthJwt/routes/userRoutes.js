const express= require('express')
const router = express.Router()

const userSignUp = require('../controller/singUp')
const login = require('../controller/login')



router.post('/sign-up', userSignUp);
router.post('/login',login)



module.exports = router;