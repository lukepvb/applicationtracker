const bcrypt = require('bcrypt');

const authController = {};

/** Hash password using Bcrypt **/
authController.hashPassword = (req, res, next) => {
  const saltRounds = 10;
  const userPassword = req.body.password;

  bcrypt.hash(userPassword, saltRounds, (err, hash) => {
    req.body.password = hash;
    return next();
  });
};

/** Verify password using Bcrypt compare **/
authController.comparePassword = (req, res, next) => {
  console.log('Made it into authController.comparePassword');
  const { password } = req.body;
  const hash = res.locals.user[0].password;
  console.log(password);
  bcrypt.compare(password, hash, (err, result) => {
    if (result == true) {
      res.locals.verified = true;
      console.log('User has been verified! Inside authController.comparePassword');
    }
    return next();
  });
};

module.exports = authController;
