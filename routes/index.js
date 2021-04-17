const express = require('express');
const router = express.Router();

// Index page
router.get('/', function(req, res) {
    res.render('index.html');
});

// User information CRUD
const user = require('./user.js');
router.use('/user', user);

module.exports = router;