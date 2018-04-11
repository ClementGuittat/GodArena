const logger = require('../../logger');
const dbMongoose = require('../../db');
const { Gladiateur } = require('../models');

/**
 * Retourne tous les gladiateurs.
 *
 * @return {Promise<Array>} Gladiateur
 */
async function getAllGladiateurs() {
    logger.verbose('Gladiateur service: recuperer tous les gladiateurs');
    return dbMongoose.collection('Gladiateur').find({}).toArray();
}

/**
 * Créer le gladiateur
 *
 * @param newGladiateur {Gladiateur}
 * @return {Promise<Gladiateur>} le Gladiateur créé
 */
async function createGladiateur(newGladiateur) {
    logger.verbose('Gladiateur service: creer un gladiateur');

    let nouveauGladiateur;
    try {
        nouveauGladiateur = await newGladiateur.save();
    } catch (err) {
        if (err) logger.warn(err);
    }
    return nouveauGladiateur;
}

/**
 * Initialiser les gladiateurs dans la base de données
 *
 * @param newGladiateur {Gladiateur}
 * @return {Number} le nombre de gladiateurs initialisé
 */
async function initGladiateurs(tabGladiateurs) {
    logger.verbose('Gladiateur service: initialiser les gladiateurs dans la BD');
    try {
        await Gladiateur.create(tabGladiateurs);
    } catch (err) {
        if (err) logger.warn('Erreur lors de l\'initialisation des données');
    }
    return tabGladiateurs.length;
}

module.exports = {
    getAllGladiateurs,
    createGladiateur,
    initGladiateurs
};
