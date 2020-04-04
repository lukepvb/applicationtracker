const App = require('../models/AppModel');

const appController = {};

/* Create a new app */

appController.createApp = (req, res, next) => {
  const {
    company,
    location,
    role,
    status,
    salary,
    contact,
    dubDown,
    notes,
    dateSubmitted,
    followUp,
  } = req.body;

  appController
    .create({
      company: company,
      location: location,
      role: role,
      status: status,
      salary: salary,
      contact: contact,
      dubDown: dubDown,
      notes: notes,
      dateSubmitted: dateSubmitted,
      followUp: followUp,
    })
    .then((newApp) => {
      res.locals.newApp = newApp;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ERROR appController.createApp: ERROR ${err}`,
        message: `ERROR: appController.createApp: ERROR see server log for details`,
      });
    });
};

module.exports = appController;
