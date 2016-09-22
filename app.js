var koa = require('koa');
var path = require('path');
var render = require('koa-swig');
var router = require('koa-router')();
var routers = require('./routers');
var staticCache = require('koa-static-cache');
var app = koa();

app.use(staticCache(path.join(__dirname, 'static'), {
	maxAge: 365 * 24 * 60 * 60,
    dynamic: true
}));

app.context.render = render({
	root: path.join(__dirname, 'views'),
	autoescape: true,
	cache: false
});

routers(router);

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);