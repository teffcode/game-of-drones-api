const _ = require('lodash');
const { Statistics: StatisticsModel } = require('../../models');

const statesAllowed = ['WINS', 'TIES', 'DEFEATS'];

module.exports = [
  async (req, res) => {
    const { player } = req.params;
    const { state } = req.body;

    if (!player) {
      return res.status(400)
        .json({
          message: 'Player param must be provided',
        });
    }

    if (!state) {
      return res.status(400)
        .json({
          message: 'State body must be provided',
        });
    }

    if(!(_.includes(statesAllowed, state.toUpperCase()))) {
      return res.status(400)
        .json({
          message: 'state must be wins, ties or defeats',
        });
    }
    
    const paramsToUpdate = {
      $inc: { [`rounds.${state.toLowerCase()}`]: 1 },
    };

    const statisticsStatus = await StatisticsModel.update({
      name: player.toLowerCase(),
    }, paramsToUpdate, { upsert: true });

    if (statisticsStatus.n === 0) {
      return res.status(500)
        .json({ message: 'Database error' });
    }

    return res.status(200)
      .json({ message: 'success' });
  }
];