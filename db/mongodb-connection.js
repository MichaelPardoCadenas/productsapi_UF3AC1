// mongodb-connection.js

const { MongoClient } = require("mongodb");
const { mongoURI } = require("../config/config.js");

// create mongoDB client con la URI importada
const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = client;
