const express = require("express");

const router = express.Router();
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

function authenticateJWT(req, res, next) {
    console.log('In Middleware');
    const authHeader = req.headers['authorization'];
    console.log('Auth Header: ' + authHeader);

    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if (headers.length < 1) {
        
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];

    if (token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }
    console.log(process.env.JWT_SECRET);
    console.log(jwt.decode(token));

    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Add decoded token to the request
    });

    next(); // Proceed to the next middleware or route handler
}

router
    .route("/register")
    .post(authController.register);

router
    .route("/login")
    .post(authController.login);


router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(authenticateJWT, tripsController.tripsAddTrip);// POST method to add the trip

    // Left over to get trips.js to work.
router
    .get('/trips/:tripCode', tripsController.tripsFindByCode);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

router
    .route('/trips')
    .get(tripsController.tripsList) // public
    .post(authenticateJWT, tripsController.tripsAddTrip); // protected

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // public
    .put(authenticateJWT, tripsController.tripsUpdateTrip); // protected

module.exports = router;