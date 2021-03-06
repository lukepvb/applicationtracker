const User = require('../models/UserModel');

const userController = {};

/* Check to see if a User exists in the database */
userController.userExists = (req, res, next) => {
  const { email } = req.body;

  // check database to see if user already exists
  User.findOne({ $or: [{ email: email }, { username: email }] }, [
    'firstName',
    'lastName',
    '_id',
    'email',
    'username',
    'apps'
  ])
    .exec()
    .then((userData) => {
      res.locals.exists = false;
      if (userData) {
        const exists = true;
        res.locals.exists = exists;
        res.locals.user = userData;
        return next();
      }
    })
    .catch((err) => {
      return next({
        log: `ERROR: userController.verifyUser: ERROR ${err}`,
        message: `ERROR: userController.verifyUser: ERROR see server log for details`
      });
    });
};

/* Create new user  */
userController.createUser = (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;

  User.create({
    firstName,
    lastName,
    username,
    email,
    password,
    apps: []
  })
    .then((newUser) => {
      res.locals.newUser = newUser;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ERROR: userController.createUser: ERROR ${err}`,
        message: `ERROR: userController.createUser: ERROR see server log for details`
      });
    });
};

/* Get all users */
userController.getAllUsers = (req, res, next) => {
  User.find({})
    .exec()
    .then((users) => {
      const allUsers = users;
      res.locals.allUsers = allUsers;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ERROR: userController.getAllUsers: ERROR: ${err}`,
        message: `ERROR: userController.getAllUsers: ERROR see server log for details`
      });
    });
};

/* Find a specific user by ID */
userController.getUserById = (req, res, next) => {
  const { userId } = req.body;

  User.findById(userId)
    .exec()
    .then((userData) => {
      res.locals.user = userData;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ERROR: userController.getUserById: ERROR: ${err}`,
        message: `ERROR: userController.getUserById: ERROR: ${err}`
      });
    });
};

/* Delete user */
userController.deleteUser = (req, res, next) => {
  const { userId } = req.params;

  User.findByIdandDelete(userId)
    .exec()
    .then((user) => {
      User.delete(user);
      res.locals.userDeleted = true;
      return next();
    })
    .catch((err) => {
      return next({
        log: `ERROR: userController.deleteUser: ERROR: ${err}`,
        message: `ERROR: userController.deleteUser: ERROR: see server log for details`
      });
    });
};

module.exports = userController;
