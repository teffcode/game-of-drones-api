const { Statistics: StatisticsModel } = require('../../models');

module.exports = [
  async (req, res) => {
    const playersInfo = await StatisticsModel.find({});

    return res.status(200)
      .json({ message: 'success', data: playersInfo });
  }
];