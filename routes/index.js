var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.render('chapter15', {title: '使用 Canvas 绘图'});
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

router.get('/chapter22', function(req, res) {
	res.render('chapter22', {title: '高级技巧'});
});

router.get('/chapter21', function(req, res) {
	res.render('chapter21', {title: 'Ajax 与 Comet'});
});

router.get('/chapter20', function(req, res) {
	res.render('chapter20', {title: 'JSON'});
});

router.get('/chapter17', function(req, res) {
	res.render('chapter17', {title: '错误处理与调试'});
});

router.get('/chapter16', function(req, res) {
	res.render('chapter16', {title: 'HTML5 脚本编程'});
});

router.get('/chapter15', function(req, res) {
	res.render('chapter15', {title: '使用 Canvas 绘图'});
});

router.get('/uc', function(req, res) {
	res.render('usercenter', {title: '高级技巧'});
});
router.get('/login', function(req, res) {
	res.render('login', {title: '高级技巧'});
});
router.get('/password', function(req, res) {
	res.render('password', {title: '高级技巧'});
});
router.get('/register', function(req, res) {
	res.render('register', {title: '高级技巧'});
});
router.get('/rule', function(req, res) {
	res.render('rule', {title: '高级技巧'});
});
module.exports = router;  