const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);// POST method to add the trip

    // Left over to get trips.js to work.
router
    .get('/trips/:tripCode', tripsController.tripsFindByCode);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;