const mongoose = require('mongoose');

const CombatSchema = new mongoose.Schema({
    info: {
        date: { type: Date, default: Date.now },
        lieu: { type: String, required: true },
        etat: {
            type: String,
            default: 'En Attente',
            enum: [ 'En Attente', 'Accepte', 'Cloturer' ]
        }
    },
    details: {
        combattants: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Gladiateur' } ],
        customisation: { type: Boolean, default: false }
    }
}, { collection: 'Combat' });

CombatSchema.post('findOneAndUpdate', async (combat)=> {
    await combat.populate('details.combattants').execPopulate();
});

const Combat = mongoose.model('Combat', CombatSchema);

module.exports = {
    Combat
};
