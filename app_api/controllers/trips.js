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


module.exports = {
    tripsList,
    tripsFindByCode
};
