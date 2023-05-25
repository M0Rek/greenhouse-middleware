const startTimestamp = Date.now() - 30000000;

var express = require("express");
var router = express.Router();

function generateRandomValues({ valueMin, valueMax, startTimestamp, round }) {
  const objects = [];
  const valueRange = valueMax - valueMin;
  const now = new Date().getTime();

  for (let timestamp = startTimestamp; timestamp <= now; timestamp += 300000) {
    const value = Math.random() * valueRange + valueMin;
    const rounded = parseFloat(value.toFixed(round));
    objects.push({ timestamp: timestamp, value: rounded });
  }

  return objects;
}

/* GET users listing. */
router.get("/temperature", function (req, res, next) {
  const temperatures = generateRandomValues({
    valueMin: 15,
    valueMax: 30,
    startTimestamp: startTimestamp,
    round: 1,
  });

  const query = req.query;
  if (query.hasOwnProperty("current")) {
    //Temperature with latest timestamp
    const toReturn = [temperatures[0]];
    res.status(200);
    res.send(toReturn);
  } else {
    let toReturn = temperatures;
    if (query.startTimestamp) {
      toReturn = toReturn.filter((h) => h.timestamp >= query.startTimestamp);
    }
    if (query.endTimestamp) {
      toReturn = toReturn.filter((h) => h.timestamp <= query.endTimestamp);
    }
    res.status(200);
    res.send(toReturn);
  }
});

router.get("/co2", function (req, res, next) {
  const co2s = generateRandomValues({
    valueMin: 13,
    valueMax: 25,
    startTimestamp: startTimestamp,
    round: 1,
  });

  const query = req.query;
  if (query.hasOwnProperty("current")) {
    //Humidity with latest timestamp
    const toReturn = [co2s[0]];
    res.status(200);
    res.send(toReturn);
  } else {
    let toReturn = co2s;
    if (query.startTimestamp) {
      toReturn = toReturn.filter((h) => h.timestamp >= query.startTimestamp);
    }
    if (query.endTimestamp) {
      toReturn = toReturn.filter((h) => h.timestamp <= query.endTimestamp);
    }
    res.status(200);
    res.send(toReturn);
  }
});

router.get("/humidity", function (req, res, next) {
  const humidities = generateRandomValues({
    valueMin: 0,
    valueMax: 100,
    startTimestamp: startTimestamp,
    round: 0,
  });

  const query = req.query;
  if (query.hasOwnProperty("current")) {
    //Humidity with latest timestamp
    const toReturn = [humidities[0]];
    res.status(200);
    res.send(toReturn);
  } else {
    let toReturn = humidities;
    if (query.startTimestamp) {
      toReturn = toReturn.filter((h) => h.timestamp >= query.startTimestamp);
    }
    if (query.endTimestamp) {
      toReturn = toReturn.filter((h) => h.timestamp <= query.endTimestamp);
    }
    res.status(200);
    res.send(toReturn);
  }
});

module.exports = router;
