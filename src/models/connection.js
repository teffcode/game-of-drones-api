const mongoose = require('mongoose');

const db = mongoose.createConnection(process.env.MONGODB_URI, {
  auth: {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PWD
  }
}); 

db.on('connected', () => console.log('DB connected :)'));

module.exports = db;

// export MONGODB_URI='mongodb://ds233218.mlab.com:33218/game-of-drones' MONGODB_USER='gameUser' MONGODB_PWD='tefa123' npm start