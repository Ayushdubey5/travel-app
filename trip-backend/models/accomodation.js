const mongoose = require('mongoose');
const accommodationSchema = new mongoose.Schema({
  name: String,
  checkIn: String,
  checkOut: String,
  status: String
});
module.exports = mongoose.model('Accommodation', accommodationSchema);
