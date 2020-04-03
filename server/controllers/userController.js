const User = require('../models/UserModel');

const userController = {};


/* Verify User */
userController.verifyUser = (req, res, next) => {
  const { email, password } = req.body;

  // check database to see if user already exists
  User.find({ email, password })
    .exec()
    .then(userData => {
      res.locals.isVerified = false;
      if (userData.length === 1) {
        isVerified = true;
        res.locals.isVerified = isVerified;
        return next();
      }
      return next() // I'm not 100% sure why this is here, but I had it in another project so we will see
    })
    .catch(err => {
      return next({
        log: `ERROR: userController.verifyUser: ERROR ${err}`,
        message: `ERROR: userController.verifyUser: ERROR see server log for details`
      });
    });
}



/* Create new user  */
userController.createUser = (req, res, next) => {
  const { // enter user database keys here to pull from req.body }  = req.body;

  User.create({
    // enter the object info here
  })
    .then(newUser => {
      res.locals.newUser = newUser;
      console.log('New User added to the Database!');
      return next();
    })
    .catch(err => {
      return next({
        log: `ERROR: userController.createUser: ERROR ${err}`,
        message: `ERROR: userController.createUser: ERROR see server log for details`
      });
    }

}



/* Get all users */
userController.getAllUsers = (req, res, next) => {
  User.find({})
    .exec()
    .then(users => {
      const allUsers = users;
      res.locals.allUsers = allUsers;
      return next();
    })
    .catch(err => {
      return next({
        log: `ERROR: userController.getAllUsers: ERROR: ${err}`,
        message: `ERROR: userController.getAllUsers: ERROR see server log for details`
      })
    })


}


/* Find a specific user by ID */
userController.getUserById = (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .exec()
    .then(specificUser => {
      res.locals.specificUser = specificUser;
      return next();
    })
    .catch(err => {
      return next({
        log: `ERROR: userController.getUserById: ERROR: ${err}`,
        message: `ERROR: userController.getUserById: ERROR: ${err}`
      })
    })

}


/* Update user */
userController.updateUser = (req, res, next) => {
  // Will come back to this part, not 100 percent sure right now

}



/* Delete user */
userController.deleteUser = (req, res, next) => {
  const { userId } = req.params;

  User.findByIdandDelete(userId)
    .exec()
    .then(user => {
      User.delete(user);
      res.locals.userDeleted = true;
      return next();
    })
    .catch(err => {
      return next({
        log: `ERROR: userController.deleteUser: ERROR: ${err}`,
        message: `ERROR: userController.deleteUser: ERROR: see server log for details`
      })
    })

}

module.exports = userController;