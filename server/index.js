const logger = require('./logger');
const express = require('express');

const routes = require('./app/routes');
const app = express();

const WEB_CONFIG = require('./config/web');

app.use('/api/', routes);

const server = require('http')
    .createServer(app);

server.listen(WEB_CONFIG.port, WEB_CONFIG.hostname);
logger.debug(`Listenning on port ${ WEB_CONFIG.port} and hostname ${ WEB_CONFIG.hostname}`);
