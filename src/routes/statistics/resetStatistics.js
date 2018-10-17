const { Statistics: StatisticsModel } = require('../../models');

module.exports = [
  async (req, res) => {
    const queryUpdate = {
      $set: {
        'rounds.wins': 0,
        'rounds.defeats': 0,
        'games.wins': 0,
        'games.defeats': 0,
      }
    }
    await StatisticsModel.update({}, queryUpdate, { multi: true });

    return res.status(200)
      .json({ message: 'success' });
  }
];