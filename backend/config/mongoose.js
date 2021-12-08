const mongoose = require('mongoose');
//const db=mongodb+srv://Divya:divyabhat@cluster1.dqrgg.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-l1gsn6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex:true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to database:: MongoDB');
});

module.exports = db;
