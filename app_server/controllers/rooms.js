/* Get Room view*/
const roomData = require('../../data/rooms.json');

const rooms = (req, res) => {
  res.render('rooms', {
    title: 'Travlr Getaways - Rooms',
    rooms : roomData
  });
};

module.exports = { rooms };
