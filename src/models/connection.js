const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://ds233218.mlab.com:33218/game-of-drones', {
  auth: {
    user: 'gameUser',
    password: 'tefa123'
  }
}); 

db.on('connected', () => console.log('DB connected :)'));

module.exports = db;