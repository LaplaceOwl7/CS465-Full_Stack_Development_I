const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');

/* Get Room Page Below */
router.get('/', controller.rooms);

module.exports = router;