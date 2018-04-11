const mongoose = require('mongoose');

const { Gladiateur } = require('./gladiateur');

const EpeisteSchema = new mongoose.Schema({
    infosSpeciales: {
        arme: {
            type: String,
            default: 'Epee a deux mains',
            enum: [ 'Epee a deux mains', 'Epee à une main' ]
        }
    }
});

const Epeiste = Gladiateur.discriminator('Epeiste', EpeisteSchema);

module.exports = {
    Epeiste
};
