const express = require('express');
const router = express.Router();
const HomeController = require('../Controllers/home.controller');

// Home page GET
router.get('/', HomeController.index);
router.get('/about', HomeController.about);
router.get('/contact', HomeController.contact);
router.get('/services', HomeController.services);
router.post('/services', HomeController.servicesPost);

module.exports = router;