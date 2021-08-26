const { Schema, model } = require('mongoose');

const directMessageSchema = new Schema(
	{
		from: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		to: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		content: {
			type: String,
			required: [true, 'Message body cannot be empty'],
		},
		signature: {
			type: String, // combination of the both to and from usernames
			required: [true, 'signature is required'],
		},
	},
	{ timestamps: true }
);

const DirectMessage = model('DirectMessage', directMessageSchema);
module.exports = DirectMessage;
