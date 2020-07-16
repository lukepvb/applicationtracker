const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// initialize express
const app = express();

// bring in the database key and connect w/ mongoose
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('Error connecting to the database', err));

// create a PORT variable for server listener
const PORT = process.env.PORT || 3000;

// require routers
const userRouter = require('./routes/users');
const appRouter = require('./routes/apps');

// initialize body-parser to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle requests for static files
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

// define route handlers
app.use('/api/users', userRouter);
app.use('/api/apps', appRouter);
// app.use('/api', router);

// respond with main app
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

// catch-all route handler for any unknown route
app.use('*', (req, res) => res.status(404).send('Page Not Found'));

// express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

module.exports = app;
