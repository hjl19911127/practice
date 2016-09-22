module.exports = function(router){
	router.get('/chapter2/1', function *(next){
		yield this.render('chapter2/1-assert.html');
		yield *next;
	});


	router.get('/chapter2/2', function *(next){
		yield this.render('chapter2/2-assertGroup.html');
		yield *next;
	});

	router.get('/chapter2/3', function *(next){
		yield this.render('chapter2/3-asynAssert.html');
		yield *next;
	});

	router.get('/chapter3/1', function *(next){
		yield this.render('chapter3/1-function.html');
		yield *next;
	});

	router.get('/chapter3/2', function *(next){
		yield this.render('chapter3/2-scope.html');
		yield *next;
	});

	router.get('/chapter3/3', function *(next){
		yield this.render('chapter3/3-invoke.html');
		yield *next;
	});
};