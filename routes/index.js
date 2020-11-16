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

//response to login request
router.get("/login", function(req, res, next) {
  if (req.session.username) {
    res.redirect("/");
  }
  res.render("login", { title: "Fitted Login" });
});


//response to logout request
router.get("/logout", function(req, res, next) {
  req.session.destroy();
  res.redirect("/");
});


module.exports = router;
