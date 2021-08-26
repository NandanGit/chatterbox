const { User } = require('../models');

const createUser = async (user) => {
	return { ...user, createdAt: new Date() };
};

module.exports = {
	createUser,
};
