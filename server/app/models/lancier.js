const mongoose = require('mongoose');

const { Gladiateur } = require('./gladiateur');

const LancierSchema = new mongoose.Schema({
    infosSpeciales: {
        arme: {
            type: String,
            default: 'Lance simple',
            enum: [ 'Lance simple', 'Lance double' ]
        }
    }
});

const Lancier = Gladiateur.discriminator('Lancier', LancierSchema);

module.exports = {
    Lancier
};
