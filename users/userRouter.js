const router = require("express").Router();

const users = require("./users-model");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", (req, res) => {
  users
    .find()
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ error: `error finding users` }));
});

module.exports = server;
