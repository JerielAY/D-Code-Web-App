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

module.exports = router;
