let currentPreset = {
  id: 1,
  name: "default preset",
  thresholds: [
    {
      type: "temperature",
      min: 27.5,
      max: 32.2,
    },
    {
      type: "humidity",
      min: 60.5,
      max: 87.5,
    },
    {
      type: "co2",
      min: 12,
      max: 20,
    },
  ],
};

var express = require("express");
var router = express.Router();

router.get("/current-preset", function (req, res, next) {
  res.send(currentPreset);
});

router.post("/current-preset", function (req, res, next) {
  currentPreset = req.body.preset;
  res.status(201);
  res.send(currentPreset);
});

module.exports = router;
