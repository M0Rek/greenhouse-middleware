let schedule = [
  {
    startTime: "08:00:00",
    endTime: "09:45:00",
    dayOfWeek: 1,
  },
  {
    startTime: "18:30:00",
    endTime: "20:00:00",
    dayOfWeek: 2,
  },
  {
    startTime: "12:15:00",
    endTime: "14:20:00",
    dayOfWeek: 3,
  },
  {
    startTime: "10:30:00",
    endTime: "16:10:00",
    dayOfWeek: 4,
  },
];

var express = require("express");
var router = express.Router();

router.get("/schedule", function (req, res, next) {
  res.status(200);
  res.send(schedule);
});

router.post("/schedule", function (req, res, next) {
  schedule = req.body;
  res.status(201);
  res.send(schedule);
});

module.exports = router;
