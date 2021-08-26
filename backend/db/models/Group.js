const { Schema, model } = require('mongoose');

const groupSchema = new Schema(
	{
		groupName: {
			type: String,
			required: [true, 'Group name is required'],
			unique: true,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		members: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{ timestamps: true }
);

groupSchema.virtual('userCount').get(function () {
	return this.members.length;
});

const Group = model('Group', groupSchema);
module.exports = Group;
