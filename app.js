const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());

app.all("*", async (req, res) => {
  try {
    console.log(req.path);
    const url = `http://34.88.136.103${req.path}`;
    const result = await axios({
      method: req.method,
      url: url,
      data: req.body,
    });

    res.status(result.status).json(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
