const mongoose = require("mongoose");

async function connectMongoDB(connectionString) {
  return mongoose.connect(connectionString);
}

module.exports = { connectMongoDB };
