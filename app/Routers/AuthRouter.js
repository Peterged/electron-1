const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/AuthController');

// Login page GET
router.get('/login', AuthController.loginRender);
router.post('/login', AuthController.loginPost);
router.get('/register', AuthController.registerRender);
router.post('/register', AuthController.registerPost);

module.exports = router;