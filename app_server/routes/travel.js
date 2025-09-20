const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* Get Travel Page Below */
router.get('/', controller.travel);

module.exports = router;