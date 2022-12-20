const express = require("express");
const userModel = require("../api/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");

const saltRounds = 10;

router.get("/register", (req, res) => {
  userModel
    .find()
    .exec()
    .then((results) => {
      res.json(results);
    });
});

router.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = new userModel({
    firstName,
    lastName,
    email,
    password,
  });

  function sendError(error, status) {
    res.send(error).status(status || 500);
  }

  bcrypt.hash(password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    user.password = hash;
    user.save().then(() => {
      res.json(user);
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  function sendError(error, status) {
    res.send(error).status(status || 500);
  }

  userModel
    .findOne({ email })
    .exec()
    .then((results) => {
      if (!results) {
        return sendError();
      }

      bcrypt.compare(password, results.password, function (err, isValid) {
        console.log(results, isValid, err);
        if (isValid) {
          console.log(email);
          res.json(results);
        } else {
          return sendError();
        }
      });
    });
});

module.exports = router;
