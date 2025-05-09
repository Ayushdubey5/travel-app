const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  date: String,
  time: String
});
module.exports = mongoose.model('flight', flightSchema);
