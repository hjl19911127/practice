var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {title: 'JavaScript高级程序设计'});
});

module.exports = router;
