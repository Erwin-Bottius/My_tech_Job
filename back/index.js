const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

const tokenConfig = {
  method: 'post',
  url: 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=/partenaire',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id:
      'PAR_myjobtech_79acea2c0d77e181403f36ff351fe2bb626e154881ede4665d458bfe0e5ebd76',
    client_secret:
      '7e554e2651161bdcde31ca84e09871d615878bdb667a48b1a0b0561e418aa777',
    scope:
      'application_PAR_myjobtech_79acea2c0d77e181403f36ff351fe2bb626e154881ede4665d458bfe0e5ebd76 api_offresdemploiv2 o2dsoffre',
  }),

};
app.get('/', async (req, res) => {
  try {
    const responseToken = await axios(tokenConfig);
    const responseJobs = await axios(
      {
        method: 'get',
        url: 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?motsCles=M1805&sort=2&range=0-9',
        headers: {
          Authorization: `Bearer ${responseToken.data.access_token}`,
        },
      },
    );

    res.send(responseJobs.data);
  }
  catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`listenning at port :${port}`);
});
