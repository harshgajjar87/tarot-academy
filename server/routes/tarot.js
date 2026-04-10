const express = require('express');
const router = express.Router();
const { tarotData, allCards } = require('../data/tarotData');

// GET all overview info (history, numbers, colors)
router.get('/overview', (req, res) => {
  res.json(tarotData);
});

// GET all cards
router.get('/cards', (req, res) => {
  res.json(allCards);
});

// GET single card by id
router.get('/cards/:id', (req, res) => {
  const card = allCards.find(c => c.id === parseInt(req.params.id));
  if (!card) return res.status(404).json({ message: 'Card not found' });
  res.json(card);
});

// GET cards by arcana
router.get('/arcana/:type', (req, res) => {
  const filtered = allCards.filter(c => c.arcana.toLowerCase() === req.params.type.toLowerCase());
  res.json(filtered);
});

module.exports = router;
