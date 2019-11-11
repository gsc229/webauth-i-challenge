const express = require('express');

const baseApiRouter = require('./api-router');
const configureMiddleware = require('./configure-middleware');

const server = express();

configureMiddleware(server);

server.use('/api', baseApiRouter)

module.exports = server;


