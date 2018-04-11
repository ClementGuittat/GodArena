const logger = require('./logger');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/GodArena');

const dbConnection = mongoose.connection;
dbConnection.on('error', logger.error.bind('Erreur lors de la connexion'));
dbConnection.once('open', ()=>{
    logger.debug('Connexion à la base OK');
});

module.exports = dbConnection;
