const { body, validationResult } = require('express-validator');


const confirmCodeValidation = [
    body('code')
    .trim()
    .isNumeric()
    .isLength({ min: 6, max: 6})
    .withMessage('Invalid code')
    .bail()
    .notEmpty()
    .withMessage('Code is required')
]

module.exports = confirmCodeValidation;