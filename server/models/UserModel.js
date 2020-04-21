const mongoose = require('mongoose');

const { Schema } = mongoose;

// create appSchema
const appSchema = new Schema({
  company: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, required: true },
  salary: Number,
  contact: String,
  dubDown: { type: Boolean, default: false },
  stage: { type: String, default: 'Research' },
  lastUpdate: Date,
  notes: String,
  dateSubmitted: { type: Date, default: Date.now },
  followUp: Date,
  url: String,
});

// sets a schema for the 'user' collection
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apps: [appSchema],
});

// creates a model for the 'user' collection that will be part of the export
const User = mongoose.model('user', userSchema);

// exports all the models in an object to be used in the controller
module.exports = User;
