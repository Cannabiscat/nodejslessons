'use strict';

const connect = require('./config');

let doQuery = function (sql, params) {
	connect.getConnection(function(err, connection) {
		sql = connection.format(sql, params);
		connection.query(sql, function (err, rows) {
			if (err) console.log(err);
			return rows;
		});
		connection.release();
	});
}

const Tasks = {
	list: function(callback) {
		let sql = 'SELECT * FROM `tasks`';
		console.log(doQuery(sql));
	},
	add: function(task, callback) {
		connect.getConnection(function(err, connection) {
			let sql = 'INSERT INTO `tasks` (`id`, `task`) SET';
			connection.query(sql, task, function (err, result) {
				console.log(result);
			});
			connection.release();
		});
	},
	change: function(id, text, callback) {
		let sql = 'UPDATE `tasks` SET ? WHERE ??=?';
		let params = [{task_text: text}, `id`, id];
		doQuery(sql, params);
	},
	complete: function(id, callback) {
		/ / // TODO
	},
	delete: function(id, callback) {
		connect.getConnection(function (err, connection) {
			connection.query('DELETE FROM `tasks` WHERE `id`=' + id, function(err, rows) {
				if (err) console.log('Error: ' + err);
				console.log('Deleting task ' + id + ' is comleted');
			});
			connection.release();
		})
	}
};
Tasks.change(1, 'test three');
//Tasks.list((res) => {
//	console.log(res);
//});
module.exports = Tasks;