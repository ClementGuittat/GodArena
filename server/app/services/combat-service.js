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
 * Créer un combat
 *
 * @param newCombat {Combat}
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
        currentCombat = await Combat.findOneAndUpdate(idCombat, updatedCombat, { returnNewDocument: true });
        //Await updatedCombat.save();
    } catch (err) {
        logger.warn(err);
    }
    /*try {
        await dbMongoose.collection('Combat').updateOne(idCombat, updatedCombat);
    } catch (err) {
        logger.warn('Erreur lors de la modification d\'un combat');
    }*/
    return currentCombat;
}


module.exports = {
    getAllCombats,
    createCombat,
    updateCombat
};
