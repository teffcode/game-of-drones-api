const express = require('express');
const router = express.Router();

const updateRoundsController =  require('./statistics/updateRounds');
const updateGamesController =  require('./statistics/updateGames');
const readStatistics = require('./statistics/readPlayer');
const resetStatistics = require('./statistics/resetStatistics');

module.exports = function () {
  // Register routes
  router.get('/', (req, res) => {
    res.json({ message: 'Server running' });
  });

  router.patch('/statistics/:player/rounds', ...updateRoundsController);
  router.patch('/statistics/:player/games', ...updateGamesController);
  router.patch('/statistics/reset', ...resetStatistics);
  router.get('/statistics', ...readStatistics);

  return router;
};