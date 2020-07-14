const express = require('express');

const appController = require('../controllers/appController');
const userController = require('../controllers/userController');

const router = express.Router();
/* /api/apps/ route */
router.post('/create', appController.createApp, (req, res) => {
  res.status(200).json(res.locals.newApp);
});

router.post('/update', appController.updateApp, (req, res) => {
  console.log('SubDocument updated! - line 13 apps.js');
  res.status(200).json(res.locals.userData);
});

router.delete('/delete', appController.deleteApp, (req, res) => {
  console.log('App deleted!');
  res.sendStatus(202);
});

module.exports = router;
