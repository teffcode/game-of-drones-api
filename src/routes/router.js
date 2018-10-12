const express = require('express');
const router = express.Router();

const updateRoundsController =  require('./statistics/updateRounds');
const updateGamesController =  require('./statistics/updateGames');
const readStatistics = require('./statistics/readPlayer');

module.exports = function () {
  // Register routes
  router.get('/', (req, res) => {
    res.json({ message: 'Server running' });
  });

  router.get('/api', (req, res) => {
    res.json({ message: 'Server running' });
  });

  router.patch('/statistics/:player/rounds', ...updateRoundsController);
  router.patch('/statistics/:player/games', ...updateGamesController);
  router.get('/statistics', ...readStatistics);

  return router;
};