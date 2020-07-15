const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

/** Post request to /api/users */
router.post('/create', authController.hashPassword, userController.createUser, (req, res) => {
  res.sendStatus(200);
});

router.post('/login', userController.userExists, authController.comparePassword, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post('/dashboard', userController.getUserById, (req, res) => {
  res.status(200).json(res.locals.user);
});

module.exports = router;
