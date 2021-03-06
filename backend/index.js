const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');

require('dotenv').config();
app.use('/public', express.static(__dirname + '/public'));

const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(passport.initialize());
app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log('error:', err);
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port:${port}`);
});
