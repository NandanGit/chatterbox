const { Group } = require('../models');

exports.create = async (group) => {
	const newGroup = new Group(group);
	try {
		const createdGroup = await newGroup.save();
		return {
			status: 'success',
			createdGroup,
		};
	} catch (err) {
		return {
			status: 'error',
			message: err.message,
		};
	}
};
