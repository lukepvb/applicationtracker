const User = require('../models/UserModel');
const App = require('../models/AppModel');

const appController = {};

/* Create a new app */

appController.createApp = (req, res, next) => {
  const { userId } = req.body;
  const {
    company,
    role,
    dateSubmitted,
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
    dateSubmitted: dateSubmitted,
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
  ).exec();
  return next();
};

/* Delete App */
appController.deleteApp = (req, res, next) => {
  const { appId, userId } = req.body;
  console.log('req.body:', appId);

  /* Multiple options for deleting app below */

  // User.findOne({ 'apps._id': appId }, function(err, result) {
  //   result.apps.id(appId).remove();
  //   result.save();
  // });

  User.findOneAndUpdate({ _id: userId }, { $pull: { apps: { _id: appId } } }, { new: true })
    .then(() => {
      res.locals.appDeleted = true;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ERROR: appController.deleteApp: ERROR: ${err}`,
        message: `ERROR: appController.deleteApp: ERROR: see server log for details`
      });
    });
};

/* Update the favorite status for a specific app */

appController.updateFavorite = (req, res, next) => {
  const { userId } = req.body;
  const { appId } = req.body;
  const { favStatus } = req.body;

  // To retain same subdocument ID, you must inject current subdoc ID into updateObj
  //updateObj._id = appId;

  User.updateOne(
    { _id: userId, apps: { $elemMatch: { _id: appId } } },
    {
      $set: {
        'apps.$.favorite': !favStatus
      }
    },
    {
      new: false,
      overwrite: true,
      runValidators: true
    }
  ).exec();
  return next();
};

module.exports = appController;
