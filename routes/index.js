var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.render('chapter23', {title: 'JavaScript高级程序设计'});
});

router.get('/chapter23', function(req, res) {
	res.render('chapter23', {title: 'JavaScript高级程序设计'});
});

module.exports = router;
