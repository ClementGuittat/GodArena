const mongoose = require('mongoose');
const { Gladiateur } = require('./gladiateur');

const CavalierSchema = new mongoose.Schema({
    infosSpeciales: {
        listeArmes: {
            type: [ String ],
            default: [ 'Cheval', 'Rhino', 'Dromadaire' ]
        },
        armeChoisie: {
            type: String,
            default: 'Cheval'
        }
    }
});

const Cavalier = Gladiateur.discriminator('Cavalier', CavalierSchema);

module.exports = {
    Cavalier
};
