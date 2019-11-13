const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../users/users-model.js");
const validateUser = require("../middleware/validateUser");
const getJwtToken = require("../middleware/getJwtToken");

router.post("/register", (req, res) => {
  let user = req.body;
  const validateResult = validateUser(user);

  if (validateResult.isSuccessful === true) {
    let hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    users
      .add(user)
      .then(saved => res.status(201).json(saved))
      .catch(err =>
        res.status(500).json({ message: `error registering user` })
      );
  } else {
    res
      .status(400)
      .json({ message: `invalid information`, errors: validateResult(errors) });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  users
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwtToken(user.username);
        res.status(200).json({ message: `Welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: `invalid credentials` });
      }
    })
    .catch(err => res.status(500).json({ message: `error logging in` }));
});

module.exports = server;
