const express = require('express');
const router = express.Router();

// Import Express Validator
const { body, validationResult } = require('express-validator');

// Import Controller
const AuthController = require('../Controllers/auth.controller');

// Import Validators
const signInValidation = require('../Validators/signin.validation');
const signUpValidation = require('../Validators/signup.validation');

// Routes
router.get('/register', AuthController.signupRender);
router.post('/register', signUpValidation, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    AuthController.signup(req, res, next);
});
router.get('/login', AuthController.signinRender);
router.post('/login', signInValidation,  (req, res, next) => AuthController.signin(req, res, next));

// Export Router
module.exports = router;