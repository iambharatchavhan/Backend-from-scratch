const express = require('express')
const router= express.Router()

const createUser = require('../controller/userController');
const userLogin = require('../controller/login')
const {auth,isStudent,isAdmin} = require('../middlewares/Auth')


router.post('/sign-up',createUser)
router.post('/sign-in',userLogin)

//Protected Route
router.get("/user", auth, isStudent, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Students',
    });
} );

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});


module.exports = router;