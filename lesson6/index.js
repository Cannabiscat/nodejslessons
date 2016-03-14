/**
 * Created by alex on 14.03.16.
 */
'use strict';

const koa = require('koa');
const app = koa();
const task = require('./tasks');

const Jade = require('koa-jade');
const jade = new Jade({
	viewPath: './views',
	debug: false,
	pretty: true,
	compileDebug: false,
	app: app
});

const router = require('koa-router')();

router.get('/', function *(next) {
	this.render('index', [], true);
})
.get('/login' , function *(next) {
	this.render('login');
});


app.use(router.routes());

app.listen(3000);