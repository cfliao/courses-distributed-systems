var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/verify', function (req, res, next) {
    if (req.query.username === 'a' && req.query.password === 'bbb')
        res.json({result: true});
    else
        res.json({result: false});
});


module.exports = router;
