const express = require('express');
const router = express.Router();

class HomeController {
    // Home page GET
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    index(req, res) {
        res.render('home/index');
    }

    // About page GET
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    about(req, res) {
        res.render('home/about');
    }

    // Contact page GET
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    contact(req, res) {
        res.render('home/contact');
    }

    // Services page GET
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    services(req, res) {
        res.render('home/services');
    }

    // Services page POST
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    servicesPost(req, res) {
        res.send('Services');
    }
}

module.exports = new HomeController();