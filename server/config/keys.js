const dotenv = require('dotenv');

// this dotenv allows us to hide our mongoURI and access it from the .env file
dotenv.config();
const mongoConnect = process.env.MONGO_URI;

module.exports = {
  mongoURI: mongoConnect
};
