require('dotenv').config();

const { app, server } = require('./serverSetup');

const db = require('./db/setup');

db.on('error', () => {
	console.log('An error occurred while connecting to database');
});
db.once('open', () => {
	const PORT = process.env.PORT || 5000;
	server.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}`);
	});
	console.log('Successfully connected to the database!!');
});
