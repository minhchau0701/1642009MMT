var db = require('../fn/Connect_database');

exports.getUser = function (email) {
	// console.log("id load one :"+id);
	var sql = `select * from myinfor`;
	console.log(sql);
	return db.load(sql);
}