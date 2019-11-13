const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../users/users-model.js");

router.post("/register", (req, res) => {
  let user = req.body;
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
});
