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
 * Retourne les gladiateurs de ce type
 *
 * @return {Promise<Array>} Gladiateur
 */
async function getGladiateursByType(typeArray) {
    logger.verbose('Gladiateur service: recuperer les gladiateurs de type %s', typeArray);
    let gladiateurList = [];
    for (const type of typeArray) {
        const res = await Gladiateur.find({ _type: type });
        gladiateurList = gladiateurList.concat(res);
    }
    return gladiateurList;
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
 * Modifier des gladiateurs
 *
 * @param updatedGladiateurs {Array<Gladiateur>}
 * @return {Promise< Array<Gladiateur> >} les Gladiateurs modifiés
 */
async function updateGladiateurs(updatedGladiateurs) {
    logger.verbose('Combat service: modifier des gladiateurs');
    let tab = [];
    try {
        for (const g of updatedGladiateurs) {
            tab.push(await Gladiateur.findOneAndUpdate({ _id: g._id }, g, { new: true }));
        }

    } catch (err) {
        logger.warn(err);
    }
    return tab;
}

/**
 * Initialiser les gladiateurs dans la base de données
 *
 * @param newGladiateur {Gladiateur}
 * @return {Number} le nombre de gladiateurs initialisé
 */
async function initGladiateurs(tabGladiateurs) {
    logger.verbose('Gladiateur service: initialiser les gladiateurs dans la BD');
    let res;
    try {
        res = await Gladiateur.create(tabGladiateurs);
    } catch (err) {
        if (err) logger.warn('Erreur lors de l\'initialisation des données');
    }
    return res;
}

module.exports = {
    getAllGladiateurs,
    createGladiateur,
    getGladiateursByType,
    updateGladiateurs,
    initGladiateurs
};
