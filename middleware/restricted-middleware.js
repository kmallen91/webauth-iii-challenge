const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../users/users-model");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET || "super secret";

    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: `bad token` });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: `no credentials provided` });
  }
};
