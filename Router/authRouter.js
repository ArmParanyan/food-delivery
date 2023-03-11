const express = require('express');
const router = express.Router();
const verify = require('../Middlewares/signUp');
const UserController = require('../Controler/auth.controler');
const upload = require('../Middlewares/upload');  

router.post('/register', 
    upload.single('avatar'),
    verify.userValidation,
    verify.validate,
    UserController.register,
);

router.post('/login',
    UserController.login,
);

module.exports = router ;