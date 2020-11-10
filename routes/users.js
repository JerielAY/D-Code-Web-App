// users.js
// D-Code-Wep_App
// Authors: Team 4
// Date: 10/10/20
// License: GPL 3.0
// Connects the client to the appropriate user information upon login.

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
