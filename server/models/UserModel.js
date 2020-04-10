const mongoose = require('mongoose');

const { Schema } = mongoose;

// sets a schema for the 'user' collection
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apps: Array,
});

// creates a model for the 'user' collection that will be part of the export
const User = mongoose.model('user', userSchema);

// exports all the models in an object to be used in the controller
module.exports = User;
