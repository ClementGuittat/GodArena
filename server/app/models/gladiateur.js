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
    enCombat: { type: Boolean, default: false }
}, GladiateurOptions);

const Gladiateur = mongoose.model('Gladiateur', GladiateurSchema);

module.exports = {
    Gladiateur
};
