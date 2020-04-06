const mongoose = require('mongoose');
// bring in the database key and connect w/ mongoose
const db = require('../config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('Error connecting to the database', err));

const { Schema } = mongoose;

// sets a schema for the 'user' collection
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apps: Array,
});

// creates a model for the 'user' collection that will be part of the export
const User = mongoose.model('user', userSchema);

// exports all the models in an object to be used in the controller
module.exports = User;
