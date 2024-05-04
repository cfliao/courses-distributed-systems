var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// http://localhost:3000/login
router.get('/login', function (req, res, next) {
    res.render('login', {message: 'please login.'});
});

// http://localhost:3000/verify
router.post('/verify', function (req, res, next) {

    if (req.body.username === 'a' && req.body.password === 'bbb')
        res.render('main');
    else
        res.render('login', {message: 'login failed'});
});

module.exports = router;
