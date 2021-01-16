// users.js
// D-Code-Wep_App
// Authors: Team 4
// Date: 10/10/20
// License: GPL 3.0
// Connects the client to the appropriate user information upon login.

var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const { db, User, connectDB} = require("../models/index.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//setting up response to parse user entered data on register page
router.post("/register", function(req, res, next) {
  console.log("this is db");
  console.log(db);
  console.log("In the register post function");
  let usersname = "Tom";
  let usersemail = "tom@test.com";
  const testperson = db.registerNewUser({ usersname, usersemail });
  console.log(testperson);
  req.session.username = usersname;
  res.redirect("/")
});

//Setting up reseponse to parse user entered data on the login page
router.post("/login", function(req, res, next) {
  let username = req.body.username;

  User.findByLogin(username).then(user => {
    if (user) {
      req.session.username = username;
      req.session.userID = user._id
      res.redirect("/");
    } else {
      res.send(`${username} not found`);
    }
  });
});

module.exports = router;
