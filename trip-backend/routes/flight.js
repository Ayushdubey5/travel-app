const express = require('express');
const Flight = require('../models/flight');
const router = express.Router();

router.get('/', async (req, res) => {
  const flights = await Flight.find();
  res.json(flights);
});

router.post('/', async (req, res) => {
  const newFlight = new Flight(req.body);
  const saved = await newFlight.save();
  res.json(saved);
});

module.exports = router;
