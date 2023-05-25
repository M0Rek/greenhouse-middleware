let presets = [
  {
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
  },
  {
    id: 2,
    name: "fallback preset",
    thresholds: [
      {
        type: "temperature",
        min: 25.0,
        max: 35.0,
      },
      {
        type: "humidity",
        min: 30.0,
        max: 90.0,
      },
      {
        type: "co2",
        min: 10,
        max: 30,
      },
    ],
  },
];

var express = require("express");
var router = express.Router();

router.get("/preset", function (req, res, next) {
  res.json(presets);
});

router.post("/preset", function (req, res, next) {
  presets.push(req.body);
  res.status(201);
  res.send(presets);
});

router.get("/preset/:id", function (req, res, next) {
  let toReturn = presets.filter((preset) => preset.id == req.params.id);
  if (toReturn) {
    res.status(201);
    res.send(toReturn);
  } else {
    res.status(404);
    res.send();
  }
});

router.delete("/preset/:id", function (req, res, next) {
  let index = -1;
  presets.forEach((p) => {
    if (p.id == req.params.id) {
      index = presets.indexOf(p);
      presets.splice(index, 1);
      res.status(200);
      res.send(req.params.id);
    }
  });
  res.status(404);
  res.send();
});

router.put("/preset/:id", function (req, res, next) {
  presets.forEach((p) => {
    if (p.id == req.params.id) {
      p = req.body;
      res.status(200);
      res.send(p);
    }
  });
  res.status(404);
  res.send();
});

module.exports = router;
