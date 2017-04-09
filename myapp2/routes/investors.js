var express = require('express');
var investors = require('../data/investors.json');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('investors', { title: 'Information of Investors', investors: investors })
        // res.send('Investors');
});
module.exports = router;