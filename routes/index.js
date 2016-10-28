var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.render('chapter25', {title: 'JavaScript高级程序设计'});
});

router.get('/chapter23', function(req, res) {
	res.render('chapter23', {title: 'JavaScript高级程序设计'});
});

router.get('/chapter24', function(req, res) {
	res.render('chapter24', {title: 'JavaScript高级程序设计'});
});

router.get('/chapter25', function(req, res) {
	res.render('chapter25', {title: 'JavaScript高级程序设计'});
});

module.exports = router;  