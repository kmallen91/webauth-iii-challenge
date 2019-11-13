const jwt = require("jsonwebtoken");

module.exports = {
  getJwtToken
};

function getJwtToken(username) {
  const payload = {
    username,
    role: "student"
  };

  const secret = process.env.JWT_SECRET || "super secret";
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}
