const mongoose = require('mongoose')
const mongoDBUri = 'mongodb://localhost/todo';
const options = {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
};

mongoose.Promise = global.Promise
module.exports = mongoose.connect(mongoDBUri, options)