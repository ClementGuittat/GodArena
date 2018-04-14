const router = require('express').Router();
const am = require('../../utils/async-middleware');

const combatController = require('../controllers/combat-controller');

router.get('/', am(combatController.getAllCombats));
router.post('/', am(combatController.createCombat));
router.put('/:id(\\w+)', am(combatController.updateCombat));
router.get('/:id(\\w+)', am(combatController.getCombatById));

module.exports = router;
