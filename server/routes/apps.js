const express = require('express');

const appController = require('../controllers/appController');
const userController = require('../controllers/userController');

const router = express.Router();
/* /api/apps/ route */
router.post('/create', appController.createApp, (req, res) => {
  res.status(200).json(res.locals.newApp);
});

router.put('/update', appController.updateApp, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
