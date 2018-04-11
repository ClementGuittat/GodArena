const mongoose = require('mongoose');
const { Gladiateur } = require('./gladiateur');

const CavalierSchema = new mongoose.Schema({
    infosSpeciales: {
        arme: {
            type: String,
            default: 'Epee seule',
            enum: [ 'Epee seule', 'Epee et bouclier' ]
        },
        monture: {
            type: String,
            default: 'Cheval',
            enum: [ 'Cheval', 'Rhino', 'Dromadaire', 'Ray-Ban' ]
        }
    }
});

const Cavalier = Gladiateur.discriminator('Cavalier', CavalierSchema);

module.exports = {
    Cavalier
};
