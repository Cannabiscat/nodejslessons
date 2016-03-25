/**
 * Created by alex on 14.03.16.
 */
'use strict';

const koa = require('koa');
const stat = require('koa-static');
const router = require('koa-router')();
const mysql = require('mysql-co');
const Jade = require('koa-jade');
const req = require('./query');
const config = require('./config');
const csrf = require('koa-csrf');
const session = require('koa-session');
const parse = require('co-body');

const app = module.exports = koa();
csrf(app);
app.use(session(app));
app.keys = ['some secret phrase'];
app.use(stat(__dirname + '/public'));
const jade = new Jade({
	viewPath: './views',
	debug: false,
	pretty: true,
	compileDebug: false,
	app: app
});

const Pool = mysql.createPool(config);

app.use(function *(next) {
	this.db = yield Pool.getConnection();
	yield next;
	this.db.release();
});
router.get('/', function* (next) {
		if (this.session.userID === undefined) {
			this.render('index', {message: 'User not authenticated!'});
		} else {
			this.render('index', {message: 'Welcome, ' + this.session.username} );
		}
		yield next;
	})
	.get('/login', function* (next) {
		if (!this.session.userID) {
			this.render('login', {csrf: this.csrf});
		} else {
			this.redirect('/logout');
		}
		yield next;
	})
	.get('/create', function* (next) {
		this.render('create');
		yield next;
	})
	.post('/login', function* (next) {
		let body = yield parse(this);
		try {
			this.assertCsrf(body);
		} catch (err) {
			this.throw(403, err)
		}
		let user = yield this.db.query(req.get, [`users`, `user_name`, body.username]);
		let res = user[0][0];
		if (!res.id) throw(404, 'User not found');
		this.session.userID = res.id;
		this.session.username= res.user_name;
		this.redirect('/');
		yield next;
	})
	.get('/logout', function* (next) {
		this.session = null;
		this.redirect('/login');
		yield next;
	})


app.use(router.routes());

app.listen(3000);