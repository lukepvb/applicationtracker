const express = require('express');

const appController = require('../controllers/appController');
const userController = require('../controllers/userController');

const router = express.Router();
/* /api/apps/ route */
router.post('/create', userController.userExists, appController.createApp, (req, res) => {
  res.status(200).json(res.locals.newApp);
});

module.exports = router;
