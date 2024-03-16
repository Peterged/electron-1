const { body, validationResult } = require('express-validator');

/*
    User: fullName, email, role, password
    role = ['normal', 'admin']
    emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
*/
const signInValidation = [
    body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email address')
    .bail()
    .notEmpty()
    .withMessage('Email is required'),
    
    body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or above')
    .bail()
    .notEmpty()
    .withMessage('Password is required')
]

module.exports = signInValidation;