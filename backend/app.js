require('dotenv').config();

// App and server
const { app, server } = require('./serverSetup');

// connect to database
const db = require('./db/setup');
db.connect();
