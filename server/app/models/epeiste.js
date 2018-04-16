const mongoose = require('mongoose');

const { Gladiateur } = require('./gladiateur');

const EpeisteSchema = new mongoose.Schema({
    infosSpeciales: {
        listeArmes: {
            type: [ String ],
            default: [ 'Epee à deux mains', 'Epee à une main', 'Glaive' ]
        },
        armeChoisie: {
            type: String,
            default: 'Epee à deux mains'
        }
    }
});

const Epeiste = Gladiateur.discriminator('Epeiste', EpeisteSchema);

module.exports = {
    Epeiste
};
