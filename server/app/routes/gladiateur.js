const router = require('express').Router();
const am = require('../../utils/async-middleware');

const gladiateurController = require('../controllers/gladiateur-controller');

router.get('/', am(gladiateurController.getAllGladiateurs));
router.post('/', am(gladiateurController.createGladiateur));
router.post('/init', am(gladiateurController.initGladiateurs));

module.exports = router;
