const User = require('../models/UserModel');
const App = require('../models/AppModel');

const appController = {};

/* Create a new app */

appController.createApp = (req, res, next) => {
  const {
    company,
    role,
    startedOn,
    location,
    salary,
    lastUpdate,
    status,
    stage,
    url,
    contact,
    notes,
    dubDown,
    followUp,
  } = req.body.newApp;

  console.log('In appController, before .create');
  const id = req.body.userId;
  console.log(id);

  const newApp = new App({
    company: company,
    role: role,
    dateSubmitted: startedOn,
    location: location,
    salary: salary,
    lastUpdate: lastUpdate,
    status: status,
    stage: stage,
    url: url,
    contact: contact,
    notes: notes,
    dubDown: dubDown,
    followUp: followUp,
  });

  console.log('This is our newApp', newApp);

  User.findById(id, (err, userDoc) => {
    console.log(userDoc);
    if (err) return res.status(500).send(err);
    userDoc.apps.push(newApp);
    userDoc.save();
    console.log('after newApp has been pushed', userDoc);
    return res.status(201).send(userDoc);
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
