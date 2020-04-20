const User = require('../models/UserModel');

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
    notes,
    dateSubmitted,
    followUp,
  } = req.body;

  console.log('In appController, before .create');
  console.log(res.locals.user._id);
  const id = res.locals.user._id;

  res.locals.user.apps.push({
    company,
    location,
    role,
    status,
    salary,
    contact,
    notes,
    dateSubmitted,
    followUp,
  });

  const user = res.locals.user;

  User.findByIdAndUpdate(id, user, { new: true }, (err, newApps) => {
    if (err) return res.status(500).send(err);
    return res.send(newApps);
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
