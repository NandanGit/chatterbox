const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
module.exports = db;
