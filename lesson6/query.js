'use strict';

const Query = {
	list: 'SELECT * FROM ??',
	add: 'INSERT INTO ?? SET ?',
	get: 'SELECT * FROM ?? WHERE ??=?',
	change: 'UPDATE ?? SET ? WHERE ??=?',
	delete: 'DELETE FROM ?? WHERE ??=?'
	}
module.exports = Query;