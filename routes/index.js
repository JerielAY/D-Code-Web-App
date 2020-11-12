// index.js
// D-Code-Wep_App
// Authors: Team 4
// Date: 10/25/20
// License: GPL 3.0
// Routes the client to the correct page of the web app.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'D-CODE' });
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
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log in' });
});

// Create Account page
router.get('/createaccount', function(req, res, next) {
  res.render('createaccount', { title: 'Create Account' });
});

module.exports = router;
