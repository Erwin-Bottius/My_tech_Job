/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
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
      minRange,
    } = req.body;
    // variable qui trabsforme base en tableau
    // , si jamais l'utilisateur a renseigné plusiseurs technos
    const baseArray = base.split(' ');
    const jobs = [];
    // Ici nous récupérons le token qui va nous permettre de requeter l'API
    const responseToken = await axios(tokenConfig);
    // Si l'utilisateur a renseigner plusieurs technos
    // on boucle dessus en faisant une requete pour chaque techno
    if (baseArray.length > 1) {
      for (let index = 0; index < baseArray.length; index++) {
        const responseJobs = await axios(createDataConfig(baseArray[index],
          location,
          isDepartment,
          isFrenchState,
          responseToken));
          // On push le résultat de chaque requete dans le tableu jobs[]
        if (responseJobs.data.resultats) jobs.push(...responseJobs.data.resultats);
      }
      // Puis on filtre le tableau en supprimant tous les objets qui ont le meme id
      // (certains objets sont differents cependant ont le meme id, d'ou ce petit algo)
      const uniqueResult = new Set();
      const filteredUNiqueResult = jobs.filter((element) => {
        const duplicate = uniqueResult.has(element.id);
        uniqueResult.add(element.id);
        return !duplicate;
      });
      // Puis on evoit la reponse au front
      res.send(filteredUNiqueResult);
    }
    // Si l'utilsateur a renseigné qu'une seule techno, on effectue la requete simplement
    else {
      const responseJobs = await axios(createDataConfig(base,
        location,
        isDepartment,
        isFrenchState,
        minRange,
        responseToken));
      res.send(responseJobs.data.resultats);
    }
  }
  catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`listenning at port :${port}`);
});
