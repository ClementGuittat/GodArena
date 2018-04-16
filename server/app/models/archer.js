const mongoose = require('mongoose');
const { Gladiateur } = require('./gladiateur');

const ArcherSchema = new mongoose.Schema({
    infosSpeciales: {
        listeArmes: {
            type: [ String ],
            default: [ 'Arc', 'Arbalète', 'Marteau' ]
        },
        armeChoisie: {
            type: String,
            default: 'Arc'
        }
    }
});

const Archer = Gladiateur.discriminator('Archer', ArcherSchema);

module.exports = {
    Archer
};
