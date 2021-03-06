const logger = require('../../logger');
const dbMongoose = require('../../db');
const { Combat } = require('../models');

/**
 * Retourne tous les combats.
 *
 * @return {Promise<Array>} Combats
 */
async function getAllCombats() {
    logger.verbose('Combat service: recuperer tous les combats');
    return dbMongoose.collection('Combat').find({}).toArray();
}

/**
 * Créer un combat en mettant des combattants par défaut selon leur type
 *
 * @param newCombat {Combat}
 * @param type String
 * @return {Promise<Combat>} le combat créé
 */
async function createCombat(newCombat) {
    logger.verbose('Combat service: creer un combat');
    let nouveauCombat;
    try {
        nouveauCombat = await newCombat.save();
    } catch (err) {
        logger.warn(err);
    }
    return nouveauCombat;
}

/**
 * Retourne le combat correspondant à l'id.
 *
 * @return {Promise<Combat>} le combat correspondant
 */
async function getCombatById(id) {
    logger.verbose('Combat service: le combat correspondant à l\'id: %s', id);
    const combat = await Combat.findOne({ _id: id });
    if (!combat) logger.warn('Ce comabt n\'existe pas');
    return combat;
}

/**
 * Modifier un combat
 *
 * @param updatedCombat
 * @return {Promise<Combat>} le combat modifié
 */
async function updateCombat(updatedCombat) {
    logger.verbose('Combat service: modifier un combat');
    const idCombat = { _id: updatedCombat._id };
    let currentCombat;

    try {
        currentCombat = await Combat.findOneAndUpdate(idCombat, updatedCombat, { new: true });
    } catch (err) {
        logger.warn(err);
    }
    return currentCombat;
}


module.exports = {
    getAllCombats,
    createCombat,
    updateCombat,
    getCombatById
};
