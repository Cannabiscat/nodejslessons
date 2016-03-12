'use strict';

const doQuery = require('./qtemplate').DoQuery;

const Tasks = {
	list: function(callback) {
		let sql = 'SELECT * FROM `tasks` ORDER BY ?? ASC';
		let params = [`task_order`];
		doQuery(sql, params, callback);
	},
	add: function(task, callback) {
		let sql = 'INSERT INTO `tasks` SET ?';
		let params = [{
			task_text: task.text,
			task_order: task.order
		}];
		doQuery(sql, params, callback);
	},
	change: function(id, text, callback) {
		let sql = 'UPDATE `tasks` SET ? WHERE ??=?';
		let params = [{task_text: text}, `id`, id];
		doQuery(sql, params, callback);
	},
	complete: function(id, callback) {
		let sql = 'UPDATE `tasks` SET ? WHERE ??=?';
		let params = [{task_status: 1}, `id`, id];
		doQuery(sql, params, callback);
	},
	delete: function(id, callback) {
		let sql = 'DELETE FROM `tasks` WHERE ??=?';
		let params = [`id`, id];
		doQuery(sql, params, callback);
	}
};
Tasks.list((result)=> {
	console.log(result[1]);
})
module.exports = Tasks;