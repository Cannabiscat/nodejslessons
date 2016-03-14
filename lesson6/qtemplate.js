'use strict';

const connect = require('./config');

const DBDriver = {
	DoQuery : (sql, params, callback) => {
		connect.getConnection(function (err, connection) {
			sql = connection.format(sql, params);
			console.log(sql);
			connection.query(sql, function (err, rows) {
				if (err) console.log(err);
				callback(rows);
			});
			connection.release();
		});
	}
}
module.exports = DBDriver;