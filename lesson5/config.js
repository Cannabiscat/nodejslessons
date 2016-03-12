/**
 * Created by alex on 11.03.16.
 */
const mysql = require('mysql');
const Pool = mysql.createPool({
	host : 'localhost',
	database : 'todo',
	user : 'user',
	password : '1234'
});


module.exports = Pool;