const express = require('express');
const Accommodation = require('../models/Accommodation');
const router = express.Router();

// Get all accommodations
router.get('/', async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new accommodation
router.post('/', async (req, res) => {
  try {
    const newAccommodation = new Accommodation(req.body);
    const saved = await newAccommodation.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;