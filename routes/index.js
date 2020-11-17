// index.js
// D-Code-Wep_App
// Authors: Team 4
// Date: 10/25/20
// License: GPL 3.0
// Routes the client to the correct page of the web app.

var express = require('express');
var router = express.Router();
const { User, Event, Project } = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'D-CODE' });
});


router.get('/index', function(req, res, next) {
  res.render('index', { title: 'D-CODE' });
});

///Set up response for register page request
router.get("/register", function(req, res, next) {
  res.render("register");
});

// response to login request
router.get("/login", function(req, res, next) {
  if (req.session.username) {
    res.redirect("/");
  }
  res.render("login", { title: "Login" });
});


//response to logout request
router.get("/logout", function(req, res, next) {
  req.session.destroy();
  res.redirect("/");
});

// Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Calendar page
router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'Calendar' });
});

// About Us page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

// Donate page
router.get('/donate', function(req, res, next) {
  res.render('donate', { title: 'Donate' });
});

// Login page
// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Log in' });
// });

module.exports = router;
