const  { body, check, validationResult } = require('express-validator');
const config = require('../Config/constants');
const User = require('../Models/User')
const col = User.user;

const userValidation = [
  check('firstName')
  .isLength({ min : 3 })
  .withMessage("Firstname must have minimum length of 3" ),

  check('email')
  .isEmail()
  .withMessage(config.messages.invalidEmail)
  .normalizeEmail(),

  check('password')
  .isStrongPassword({
    minLength: 8,
    minLowercase : 1,
    minUppercase : 1,
    minNumbers : 1
  })
  .withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number")
];
  
const validate = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(422).json( { success : false , error : error.array ()});
  }else {
    next();
  }
}
  
module.exports =   
{
    userValidation,
    validate,
}


