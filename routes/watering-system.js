let state = { state: true };
let duration = { duration: 0 };

var express = require("express");
var router = express.Router();

router.get("/watering-system/toggle", function (req, res, next) {
  res.json(state);
});

router.post("/watering-system/toggle", function (req, res, next) {
  state.state = req.body.state;
  duration.duration = req.body.duration;
  res.status(201);
  res.send(state);
});

module.exports = router;
