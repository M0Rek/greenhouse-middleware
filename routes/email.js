let email = { email: "example@via.dk" };

var express = require("express");
var router = express.Router();

router.get("/email", function (req, res, next) {
  res.json(email);
});

router.post("/email", function (req, res, next) {
  email.email = req.body.email;
  res.status(201);
  res.send(email);
});

module.exports = router;
