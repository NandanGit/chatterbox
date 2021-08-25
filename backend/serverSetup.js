const express = require('express');

const http = require('http');

// Express setup
const app = express();
app.use(express.json());

const server = http.createServer(app);

module.exports = {
	server,
	app,
};
