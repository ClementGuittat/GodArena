const mongoose = require('mongoose');

const GladiateurOptions = {
    discriminatorKey: '_type',
    collection: 'Gladiateur'
};

const GladiateurSchema = new mongoose.Schema({
    identifiant: {
        nom: String,
        age: Number
    },
    CV: {
        nbVictoires: Number,
        enCombat: Boolean
    }
}, GladiateurOptions);

const Gladiateur = mongoose.model('Gladiateur', GladiateurSchema);

module.exports = {
    Gladiateur
};
