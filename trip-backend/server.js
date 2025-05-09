const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const flightRoutes = require('./routes/flights');
const accommodationRoutes = require('./routes/accommodations');
const activityRoutes = require('./routes/activities');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/flights', flightRoutes);
app.use('/accommodations', accommodationRoutes);
app.use('/activities', activityRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error(err));
