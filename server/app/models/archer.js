const mongoose = require('mongoose');
const { Gladiateur } = require('./gladiateur');

const ArcherSchema = new mongoose.Schema({
    infosSpeciales: {
        arme: {
            type: String,
            default: 'Arc',
            enum: [ 'Arc', 'Arbalète' ]
        }
    }
});

const Archer = Gladiateur.discriminator('Archer', ArcherSchema);

module.exports = {
    Archer
};
