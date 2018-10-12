const { Schema } = require('mongoose');
const connection = require('./connection');

const Statistics = new Schema({
  name: {
    type: String,
    required: true
  },
  rounds: {
    wins: {
      type: Number,
      default: 0
    },
    defeats: {
      type: Number,
      default: 0
    },
    ties: {
      type: Number,
      default: 0
    }
  },
  games: {
    wins: {
      type: Number,
      default: 0
    },
    defeats: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

module.exports = connection.model('statistics', Statistics);
