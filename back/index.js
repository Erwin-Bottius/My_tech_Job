const express = require('express');
const axios = require('axios');
const cors = require('cors');
const tokenConfig = require('./API/tokenConfig');
const createDataConfig = require('./API/createDataConfig');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const {
      base,
      location,
      isDepartment,
      isFrenchState,
    } = req.body;

    const responseToken = await axios(tokenConfig);
    const responseJobs = await axios(createDataConfig(base,
      location,
      isDepartment,
      isFrenchState,
      responseToken));

    res.send(responseJobs.data);
  }
  catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`listenning at port :${port}`);
});
