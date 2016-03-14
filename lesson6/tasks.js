'use strict';

const DoQuery = require('./qtemplate').DoQuery;

const Tasks = {
	list: function(callback) {
		let sql = 'SELECT * FROM `tasks` ORDER BY ?? ASC';
		let params = [`task_order`];
		DoQuery(sql, params, callback);
	},
	add: function(task, callback) {
		let sql = 'INSERT INTO `tasks` SET ?';
		let params = [{
			task_text: task.text,
			task_order: task.order
		}];
		DoQuery(sql, params, callback);
	},
	change: function(id, text, callback) {
		let sql = 'UPDATE `tasks` SET ? WHERE ??=?';
		let params = [{task_text: text}, `id`, id];
		DoQuery(sql, params, callback);
	},
	complete: function(id, callback) {
		let sql = 'UPDATE `tasks` SET ? WHERE ??=?';
		let params = [{task_status: 1}, `id`, id];
		DoQuery(sql, params, callback);
	},
	delete: function(id, callback) {
		let sql = 'DELETE FROM `tasks` WHERE ??=?';
		let params = [`id`, id];
		DoQuery(sql, params, callback);
	}
};

module.exports = Tasks;