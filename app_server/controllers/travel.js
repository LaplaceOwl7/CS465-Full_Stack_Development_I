// Grab the JSON Data
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json',
'utf8'));

/* Get Travel View*/
const travel = (req, res) => {
    res.render('travel', {
        title : 'Travlr Getaways',
        trips : trips
    });
};

module.exports = {
    travel
};