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

// creates a model for the 'user' collection that will be part of the export
const App = mongoose.model('App', appSchema);

// exports all the models in an object to be used in the controller
module.exports = App;
