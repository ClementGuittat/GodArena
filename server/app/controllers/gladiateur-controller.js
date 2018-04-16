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
 * Récupère un tableau de gladiateur et les mets à jour
 *
 * @param req Request
 * @param res Response
 * @return {Promise.< Array<Gladiateur> >}
 */
async function updateGladiateurs(gladiateurs) {
    let nouveauGladiateur = [];
    gladiateurs.map(g=> {
        const typeGladiateur = g._type;

        switch (typeGladiateur) {
            case 'Animal':
                nouveauGladiateur.push(new Animal({ ...g, _id: g._id }));
                break;
            case 'Archer':
                nouveauGladiateur.push(new Archer({ ...g, _id: g._id }));
                break;
            case 'Cavalier':
                nouveauGladiateur.push(new Cavalier({ ...g, _id: g._id }));
                break;
            case 'Epeiste':
                nouveauGladiateur.push(new Epeiste({ ...g, _id: g._id }));
                break;
            case 'Lancier':
                nouveauGladiateur.push(new Lancier({ ...g, _id: g._id }));
                break;
        }
    });
    nouveauGladiateur = await gladiateurService.updateGladiateurs(nouveauGladiateur);
    return nouveauGladiateur;
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
    updateGladiateurs,
    initGladiateurs
};
