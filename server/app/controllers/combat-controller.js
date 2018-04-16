const combatService = require('../services/combat-service');
const gladiateurController = require('./gladiateur-controller');
const { Combat, Gladiateur } = require('../models');

/**
 * Récupère tous les combats de la base de données
 *
 * @param req Requete
 * @param res Reponse
 * @return {Promise.<void>} Nothing
 */
async function getAllCombats(req, res) {
    const combat = await combatService.getAllCombats();

    res.json(combat);
}

/**
 * Create a Barman
 *
 * @param req Request
 * @param res Response
 * @return {Promise.<void>} Nothing
 */
async function createCombat(req, res) {
    let nouveauCombat = new Combat(req.body);
    nouveauCombat = await combatService.createCombat(nouveauCombat);
    res.json(nouveauCombat);
}

/**
 * Récupérer un combat par son Id
 *
 * @param req Request
 * @param res Response
 * @return {Promise.<void>} Nothing
 */
async function getCombatById(req, res) {
    const combatId = req.params.id;
    const combat = await combatService.getCombatById(combatId);
    res.json(combat);
}

/**
 * Update a Barman
 *
 * @param req Request
 * @param res Response
 * @return {Promise.<void>} Nothing
 */
async function updateCombat(req, res) {
    let updatedCombat = new Combat(
        {
            ...req.body,
            _id: req.params.id
        }
    );
    const updatedGladiateurs = await gladiateurController.updateGladiateurs(req.body.details.combattants);
    updatedCombat = await combatService.updateCombat(updatedCombat);
    res.json(updatedCombat);
}

module.exports = {
    getAllCombats,
    createCombat,
    getCombatById,
    updateCombat
};
