const { body, validationResult } = require('express-validator');

/*
    User: fullName, email, role, password
    role = ['normal', 'admin']
    emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
*/
const signUpValidation = [
    body('fullName')
    .trim()
    .isLength({ min: 4 })
    .withMessage('Full name must be 4 characters or above')
    .bail()
    .notEmpty()
    .withMessage('Full name is required'),

    body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email address')
    .bail()
    .notEmpty()
    .withMessage('Email is required'),

    body('role')
    .trim()
    .isIn(['normal', 'admin'])
    .withMessage('Invalid role')
    .bail()
    .notEmpty()
    .withMessage('Role is required'),

    body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or above')
    .bail()
    .notEmpty()
    .withMessage('Password is required')
]

module.exports = signUpValidation;