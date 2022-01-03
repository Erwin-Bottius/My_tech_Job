// eslint-disable-next-line no-unused-expressions
require('dotenv').config;

const tokenConfig = {
  method: 'post',
  url: 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=/partenaire',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id:
      process.env.CLIENT_ID,
    client_secret:
      process.env.SECRET_KEY,
    scope:
      `application_${process.env.CLIENT_ID} api_offresdemploiv2 o2dsoffre`,
  }),

};

module.exports = tokenConfig;
