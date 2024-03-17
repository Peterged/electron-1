const express = require('express');
const router = express.Router();

// Import Express Validator
const { body, validationResult } = require('express-validator');

// Import Controller
const AuthController = require('../Controllers/auth.controller');

// Import Validators
const signInValidation = require('../Validators/signin.validation');
const signUpValidation = require('../Validators/signup.validation');
const forgetPasswordValidation = require('../Validators/forget-password.validation');
const confirmCodeValidation = require('../Validators/confirm-code.validation');
const confirmCodeInputValidation = require('../Validators/confirm-code-input.validation');

// Routes
// Register
router.get('/register', AuthController.signupRender);
router.post('/register', signUpValidation, AuthController.signup);

// Login
router.get('/login', AuthController.signinRender);
router.post('/login', signInValidation,  AuthController.signin);

// Forget Password
router.get('/forget-password', AuthController.forgetPasswordRender);
router.post('/forget-password', forgetPasswordValidation, AuthController.forgetPassword);

// Confirm Reset Password
router.get('/confirm-code', confirmCodeValidation, AuthController.confirmCodeRender);
router.post('/confirm-code', confirmCodeInputValidation, AuthController.confirmCode);

// Export Router
module.exports = router;