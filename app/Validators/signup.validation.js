const { body, validationResult } = require('express-validator');

/*
    User: fullName, email, role, password
    role = ['normal', 'admin']
    emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
*/
const signUpValidation = [
    body('username')
    .trim()
    .isLength({ min: 4 })
    .withMessage('Username must be 4 characters or above')
    .bail()
    .notEmpty()
    .withMessage('Username is required'),

    body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email address')
    .bail()
    .notEmpty()
    .withMessage('Email is required'),

    // body('role')
    // .trim()
    // .isIn(['normal', 'admin'])
    // .withMessage('Invalid role')
    // .bail()
    // .notEmpty()
    // .withMessage('Role is required'),

    body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or above')
    .custom(async(value, { req }) => {
        if (value !== req.body.confirmPassword) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    })
    .bail()
    .notEmpty()
    .withMessage('Password is required'),

    body('confirmPassword')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Confirm Password must be 6 characters or above')
    .custom(async(value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    })
    .bail()
    .notEmpty()
    .withMessage('Confirm Password is required')
]

module.exports = signUpValidation;