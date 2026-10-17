const exxpress = require('express');
const router = exxpress.Router();
const { getTrophies,
    getTrophiesById } = require('../controllers/trophiesController');


router.get('/trophies', getTrophies);
router.get('/trophies/:id', getTrophiesById);

module.exports = router; 