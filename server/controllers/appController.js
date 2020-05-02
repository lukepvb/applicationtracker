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
    followUp,
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
    followUp: followUp,
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

  const updatedApp = new App({
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

  User.findById(userId, (err, userDoc) => {
    if (err) return res.status(500).send(err);

    const user = Object.assign({}, userDoc);
    // console.log(user._doc, 'am user_doc');
    const apps = user._doc.apps;
    // console.log('am apps', apps);
    for (let i = 0; i < apps.length; i++) {
      if (appId == apps[i]._id) {
        apps[i] = updatedApp;
        // const currApp = userDoc.apps.id(appId);
      }
    }

    const updated = userDoc.set({ apps: apps });
    console.log('am userDoc 103', userDoc);
    // userDoc.apps.unshift(updatedApp);
    updated.save();
    return res.status(201).send(updated);
  });
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
