let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
let User = require("../Models/User");
require('dotenv').config();

// Import Libraries
const axios = require('axios');

// Import Services
const mailService = require("../Services/mail.service");

// Import Validator
const { body, validationResult } = require("express-validator");

class AuthController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  signupRender(req, res) {
    const errors = req.session.errors;
    const formData = req.session.formData;

    req.session.errors = null;
    req.session.formData = null;

    res.render("auth/register", { errors, formData });
  }

  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  signup(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      req.session.errors = errors.mapped();
      req.session.formData = req.body;
      res.redirect("/register");
    } else {
      req.session.errors = null;
      req.session.formData = null;

      const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password, 8),
      });

      user.save((err, user) => {
        if (err) {
          res.status(500).end({ message: err });
        } else {
          res.status(200).send({ message: "User registered successfully!" });
        }
      });
    }
  }

  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  signinRender(req, res) {
    let errors, formData;
    res.render("auth/login", { errors, formData });
  }

  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  signin(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('auth/login', { errors: errors.mapped(), formData: req.body })
    } else {
      User.findOne({
        email: req.body.email,
      }).exec((err, user) => {
        req.session.errors = null;
        req.session.formData = null;

        if (err) {
          res.status(500).send({ message: err });
        }

        if (!user) {
          return res.status(404).send({ message: "User not found." });
        }

        let passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }

        let token = jwt.sign(
          {
            id: user.id,
          },
          process.env.API_SECRET,
          {
            expiresIOn: 86400,
          }
        );

        res.status(200).send({
          user: {
            id: user._id,
            email: user.email,
            fullName: user.fullName,
          },
          message: "Login Successful!",
          accessToken: token,
        });
      });
    }
  }

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  forgetPasswordRender(req, res) {
    let errors, formData;
    res.render('auth/forget-password', { errors, formData })
  }

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  forgetPassword(req, res) {
    const errors = validationResult(req);
    let formData = req.body;

    if(!errors.isEmpty()) {
        res.render('auth/forget-password', { errors: errors.mapped(), formData: req.body })
    }
    else {
        let success = new mailService().sendResetPasswordEmail(req.body.email, 'https://youtube.com/');
        if(success) {
            res.redirect('auth/confirm-code');
        }
        else {
            res.render('auth/forget-password', { errors: { email: { msg: 'Email not found' } }, formData: req.body })
        }
        
    }
    }


    /**
    * GET
    * @param {Request} req 
    * @param {Response} res 
    */
    confirmCodeRender(req, res) {
        const errors = validationResult(req) || {};
        let formData = req.body || {};

        if(!errors.isEmpty()) {
            errors = errors.mapped();
        }
        else {
            res.render('auth/confirm-code', { errors, formData });
        }
    }

  /**
   * POST
   * @param {Request} req 
   * @param {Response} res 
   */
  confirmCode(req, res) {
    const errors = validationResult(req) || {};

    if(!errors.isEmpty()) {
        
    }
  }
}

module.exports = new AuthController();
