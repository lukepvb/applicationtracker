const mongoose = require('mongoose');

const { Schema } = mongoose;

// create appSchema
const appSchema = new Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  dateSubmitted: Date,
  location: { type: String, required: true },
  salary: String,
  lastUpdate: Date,
  status: { type: String, required: true },
  stage: { type: String, default: 'Research' },
  url: String,
  contact: String,
  notes: String,
  dubDown: { type: Boolean, default: false },
  followUp: { type: Boolean, default: false },
  favorite: { type: Boolean, default: false }
});

// sets a schema for the 'user' collection
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apps: [appSchema]
});

// creates a model for the 'user' collection that will be part of the export
const User = mongoose.model('user', userSchema);

// exports all the models in an object to be used in the controller
module.exports = User;
