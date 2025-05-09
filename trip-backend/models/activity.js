const mongoose = require('mongoose');
const activitySchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String
});
module.exports = mongoose.model('Activity', activitySchema);
