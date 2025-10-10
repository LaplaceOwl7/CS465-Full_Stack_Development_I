const mongoose = require('mongoose');
const Trip = require('../../app_server/models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
  try {
    const q = await Trip.find({}).exec();
    if (!q || q.length === 0) {
      // No trips found
      return res.status(404).json({ message: 'No trips found' });
    }
    // Return the found trips
    return res.status(200).json(q);
  } catch (err) {
    // Some error reading from DB
    return res.status(500).json({ message: err.message });
  }
};

const tripsFindByCode = async (req, res) => {
  try {
    const q = await Trip.find({ code: req.params.tripCode }).exec();

    if (!q || q.length === 0) {
      return res.status(404).json({ message: `Trip with code '${req.params.tripCode}' not found` });
    }

    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// POST: /trips – Adds a new Trip
// Regardless of outcome, response must include HTTP status code
// and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });

  const q = await newTrip.save();
  if (!q) {
    // Database returned no data
    return res
      .status(400)
      .json(err);
  } else {
    // Return new trip
    return res
      .status(201)
      .json(q);
  }

  // Uncomment the following line to show results of operation
  // on the console
  console.log(q);
};

// PUT: /trips/:tripCode – Updates a Trip
// Regardless of outcome, response must include HTTP status code and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
  // Debugging logs (optional)
  console.log(req.params);
  console.log(req.body);

  try {
    const q = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true } // Return updated document
    ).exec();

    if (!q) {
      // Database returned no result
      return res.status(404).json({ message: 'Trip not found' });
    }

    // Return the updated trip
    return res.status(200).json(q);
  } catch (err) {
    console.error('Error updating trip:', err);
    return res.status(500).json({ message: 'Server error', error: err.toString() });
  }

  // Note: console.log(q) here is unreachable
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
