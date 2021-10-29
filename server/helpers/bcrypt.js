const bcrypt = require("bcryptjs");

function hashPassword(pass) {
  const salt = bcrypt.genSaltSync(8);
  return (hash = bcrypt.hashSync(pass, salt));
}

function comparePassword(pass, hashPassword) {
  return (compare = bcrypt.compareSync(pass, hashPassword));
}

module.exports = { hashPassword, comparePassword };
