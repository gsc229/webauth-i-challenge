const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');

module.exports = (req, res, next) => {
  const { username, password } = req.headers;
}