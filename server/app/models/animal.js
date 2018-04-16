const mongoose = require('mongoose');

const { Gladiateur } = require('./gladiateur');

const AnimalSchema = new mongoose.Schema({
    infosSpeciales: {
        listeArmes: {
            type: [ String ],
            default: [ 'Armure', 'Enchaine', 'Muselière' ]
        },
        armeChoisie: {
            type: String,
            default: 'Armure'
        }
    }
});

const Animal = Gladiateur.discriminator('Animal', AnimalSchema);

module.exports = {
    Animal
};
