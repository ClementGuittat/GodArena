const router = require('express').Router();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('../../logger');


// Middlewares

router.use(morgan('combined', { stream: logger.stream }));

router.use(bodyParser.json());

router.use('/gladiateur', require('./gladiateur'));
router.use('/combat', require('./combat'));


// 404 Not found
router.use('*', (req, res) => {
    res.sendStatus(404);
});

module.exports = router;
