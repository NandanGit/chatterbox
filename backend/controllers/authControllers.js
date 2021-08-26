const dbOps = require('../db/operations');

exports.loginController = async (req, res) => {
	res.json({
		status: 'error',
		message: 'Route under construction',
	});
};

exports.signupController = async (req, res) => {
	const user = req.body;
	const createdUser = await dbOps.Users.create(user);
	res.json({
		status: 'success',
		message: 'User created',
		createdUser,
	});
};
