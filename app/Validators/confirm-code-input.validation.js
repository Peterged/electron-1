const { body } = require('express-validator');


const confirmCodeInputValidation = [
    body('code')
    .trim()
    .isNumeric()
    .isLength({ min: 6, max: 6})
    .withMessage('Invalid code')
    .bail()
    .notEmpty()
    .withMessage('Code is required')
]

module.exports = confirmCodeInputValidation;