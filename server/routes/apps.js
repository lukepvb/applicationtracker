const express = require('express');

const appController = require('../controllers/appController');
const userController = require('../controllers/userController');

const router = express.Router();
/* /api/apps/ route */
router.post('/create', appController.createApp, (req, res) => {
  res.status(200).json(res.locals.newApp);
});

router.post('/update', appController.updateApp, userController.getUserById, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.delete('/delete', appController.deleteApp, userController.getUserById, (req, res) => {
  if (res.locals.appDeleted) {
  }
  res.status(202).json(res.locals.user);
});

module.exports = router;
