const User = require('../models/UserModel');
const App = require('../models/AppModel');

const appController = {};

/* Create a new app */

appController.createApp = (req, res, next) => {
  const { userId } = req.body;
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
    followUp
  } = req.body.newApp;

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
    followUp: followUp
  });

  console.log('This is our newApp', newApp);

  User.findById(userId, (err, userDoc) => {
    if (err) return res.status(500).send(err);
    userDoc.apps.unshift(newApp);
    userDoc.save();
    return res.status(201).send(userDoc);
  });
};

/* Update App */
appController.updateApp = (req, res, next) => {
  const { userId } = req.body;
  const { appId } = req.body;

  const updateObj = req.body.newApp;

  // To retain same subdocument ID, you must inject current subdoc ID into updateObj
  updateObj._id = appId;

  User.updateOne(
    { _id: userId, apps: { $elemMatch: { _id: appId } } },
    {
      $set: {
        'apps.$': updateObj
      }
    },
    {
      new: false,
      overwrite: true,
      runValidators: true
    }
  )
    .exec()
    .then();
  return next();
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
        message: `ERROR: appController.deleteApp: ERROR: see server log for details`
      });
    });
};

module.exports = appController;
