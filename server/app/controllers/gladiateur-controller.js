const gladiateurService = require('../services/gladiateur-service');
const { Animal, Archer, Cavalier, Epeiste, Lancier } = require('../models');

/**
 * Récupère tous les gladiateurs de la base de données
 *
 * @param req Requete
 * @param res Reponse
 * @return {Promise.<void>} Nothing
 */
async function getAllGladiateurs(req, res) {
    const gladiateur = await gladiateurService.getAllGladiateurs();

    res.json(gladiateur);
}

/**
 * Récupère tous les gladiateurs d'un type particulier
 *
 * @param req Requete
 * @param res Reponse
 * @return {Promise.<void>} Nothing
 */
async function getGladiateursByType(req, res) {
    const type = JSON.parse(req.query.array);
    const gladiateur = await gladiateurService.getGladiateursByType(type);

    res.json(gladiateur);
}

/**
 * Récupère les informations du front et crée un gladiateur selon son type
 *
 * @param req Request
 * @param res Response
 * @return {Promise.<void>} Nothing
 */
async function createGladiateur(req, res) {

    let nouveauGladiateur;
    const typeGladiateur = req.body._type;

    switch (typeGladiateur) {
        case 'Animal':
            nouveauGladiateur = new Animal(req.body);
            break;
        case 'Archer':
            nouveauGladiateur = new Archer(req.body);
            break;
        case 'Cavalier':
            nouveauGladiateur = new Cavalier(req.body);
            break;
        case 'Epeiste':
            nouveauGladiateur = new Epeiste(req.body);
            break;
        case 'Lancier':
            nouveauGladiateur = new Lancier(req.body);
            break;
    }
    nouveauGladiateur = await gladiateurService.createGladiateur(nouveauGladiateur);
    res.json(nouveauGladiateur);
}

/**
 * Initilialise les gladiateurs
 *
 * @param req Request
 * @param res Response
 * @return {Promise.<void>} Nothing
 */
async function initGladiateurs(req, res) {

    const tabGladiateur = [];

    for (const glad of req.body) {

        let nouveauGladiateur;
        const typeGladiateur = glad._type;

        switch (typeGladiateur) {
            case 'Animal':
                nouveauGladiateur = new Animal(glad);
                break;
            case 'Archer':
                nouveauGladiateur = new Archer(glad);
                break;
            case 'Cavalier':
                nouveauGladiateur = new Cavalier(glad);
                break;
            case 'Epeiste':
                nouveauGladiateur = new Epeiste(glad);
                break;
            case 'Lancier':
                nouveauGladiateur = new Lancier(glad);
                break;
        }
        tabGladiateur.push(nouveauGladiateur);
    }
    const nbEnregistre = await gladiateurService.initGladiateurs(tabGladiateur);
    res.json(nbEnregistre);
}

module.exports = {
    getAllGladiateurs,
    getGladiateursByType,
    createGladiateur,
    initGladiateurs
};
