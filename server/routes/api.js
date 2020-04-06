const express = require('express');
const userController = require('../controllers/userController');
const appController = require('../controllers/appController');

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
// should this be to '/api' rather than '/'?
router.get('/', userController.verifyUser, (req, res) => {
  res.status(200).json({
    id: res.locals.user.id,
    name: res.locals.user.name,
    apps: res.locals.user.apps,
  });
});

module.exports = router;
