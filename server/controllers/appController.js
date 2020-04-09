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

/* Update App */
appController.updateApp = (req, res, next) => {
  // need to come back for the update part
};

/* Delete App */
appController.deleteApp = (req, res, next) => {
  const { appId } = req.params;

  App.findByIdAndDelete(appId)
    .exec()
    .then((app) => {
      App.delete(app);
      res.locals.userDeleted = true;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ERROR: appController.deleteApp: ERROR: ${err}`,
        message: `ERROR: appController.deleteApp: ERROR: see server log for details`,
      });
    });
};

module.exports = appController;
