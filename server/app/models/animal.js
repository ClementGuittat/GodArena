const mongoose = require('mongoose');

const { Gladiateur } = require('./gladiateur');

const AnimalSchema = new mongoose.Schema({
    infosSpeciales: {
        armure: { type: Boolean, default: false },
        enchaine: { type: Boolean, default: false }
    }
});

const Animal = Gladiateur.discriminator('Animal', AnimalSchema);

module.exports = {
    Animal
};
