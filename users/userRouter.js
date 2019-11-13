const router = require("express").Router();

const users = require("./users-model");
const restricted = require("../middleware/restricted-middleware.js");
const checkRole = require("../middleware/checkRole");

router.get("/", restricted, checkRole("admin"), (req, res) => {
  users
    .find()
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ error: `error finding users` }));
});

module.exports = server;
