const express = require('express');
const router = express.Router();

class AuthController {
    // Login page GET
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    loginRender(req, res) {
        res.render('auth/login');
    }

    // Login page POST
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    loginPost(req, res) {
        res.send('Login');
    }

    // Register page GET
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    registerRender(req, res) {
        res.render('auth/register');
    }

    // Register page POST
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    registerPost(req, res) {
        res.send('Register');
    }
}

module.exports = new AuthController();