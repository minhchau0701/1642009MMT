var userRepo = require('../repos/UserRepos.js');

exports.getUser = function (req, res) {
	var email = 'minhchau0701@gmail.com';
	userRepo.getUser(email)
		.then(rows => {
			console.log(rows);
			if (rows.length > 0) {
				res.statusCode = 201;
				res.json({
					returnCode: 1,
					message: "get user susscess",
					user: rows[0]
				});
			} else {
				res.json({
					returnCode: 0,
					message: "not user to get",
					user: rows
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.json({
				returnCode: 0,
				message: "get user error",
				error: err
			});
		});
};