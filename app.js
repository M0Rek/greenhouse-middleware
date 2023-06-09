const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const BACKEND_SERVER_IP = `http://34.88.59.39`; //EDIT THIS LINE TO UPDATE THE IP (WITHOUT SLASH AT THE END WITH http://)

app.all("*", async (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    req.header("origin") ||
      req.header("x-forwarded-host") ||
      req.header("referer") ||
      req.header("host")
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  try {
    const url = `${BACKEND_SERVER_IP}${req.path}`;
    const result = await axios({
      method: req.method,
      url: url,
      data: req.body,
      params: req.query,
      headers: {
        Authorization: req.headers["authorization"],
      },
    });

    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(error?.response?.status ?? 500).send(error);
  }
});

module.exports = app;
