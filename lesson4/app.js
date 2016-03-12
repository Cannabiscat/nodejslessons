'use strict';

const koa = require('koa');
const request = require('koa-request');
const handlebars = require('koa-handlebars');
const cheerio = require('cheerio');

const app = koa();

app.post('/', function* () {
	let data = yield request(this);
});

app.listen(3000);
