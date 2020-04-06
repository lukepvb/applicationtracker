const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require;

// initialize express
const app = express();

// initialize body-parser to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// bring in the database key and connect w/ mongoose
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('Error connecting to the database', err));

// create a PORT variable to listen to the server
const PORT = process.env.PORT || 3000;

// handle requests for static files
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

// define route handlers
app.use('/api/users', users);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
