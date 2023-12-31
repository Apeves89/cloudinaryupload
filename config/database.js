const mongoose = require('mongoose');
require("dotenv").config()


mongoose.connect(process.env.MONGO_URL);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});