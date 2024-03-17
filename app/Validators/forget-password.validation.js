const { body, validationResult } = require('express-validator');



const forgetPasswordValidation = [
    body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required')
    .bail()
    .isEmail()
    .withMessage('Invalid email address format')
]

module.exports = forgetPasswordValidation;