const mongoose = require('mongoose');

const { Gladiateur } = require('./gladiateur');

const LancierSchema = new mongoose.Schema({
    infosSpeciales: {
        listeArmes: {
            type: [ String ],
            default: [ 'Lance simple', 'Lance double', 'Harpon' ]
        },
        armeChoisie: {
            type: String,
            default: 'Lance simple'
        }
    }
});

const Lancier = Gladiateur.discriminator('Lancier', LancierSchema);

module.exports = {
    Lancier
};
