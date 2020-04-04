const mongoose = require("mongoose");

const { Schema } = mongoose;

// sets a schema for the 'app' collection
const appSchema = new Schema({
  company: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, required: true },
  salary: Number,
  contact: String,
  dubDown: { type: Boolean, default: false },
  notes: String,
  dateSubmitted: { type: Date, default: Date.now },
  followUp: Date
});

// creates a model for the 'app' collection that will be part of the export
const App = mongoose.model("app", appSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  App
};
