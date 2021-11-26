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
  console.log(req.body);
  try {
    const {
      base,
      location,
      isDepartment,
      isFrenchState,
      minRange,
      experience,
      contractType,
      isCity,
    } = req.body;
    // L'api de pole emploi nous renvoit un statut 206 si nous avons un contenu partiel
    // Et 200 si nous avons récupéré toute la data, nous allons donc faire le meme procéder
    // pour savoir en front si on peut faire de nouvelles requetes avec les meme critère
    // pour récupérer de la data supplementaire
    let responseStatus = 200;
    // Ici nous récupérons le token qui va nous permettre de requeter l'API
    const responseToken = await axios(tokenConfig);
    const jobs = [];
    // Si l'utilsateur n'a pas reseigné de base, on requete sans base pour avoir
    // toutes les offres
    if (base.length === 0) {
      const responseJobs = await axios(createDataConfig(
        undefined,
        location,
        isDepartment,
        isFrenchState,
        minRange,
        responseToken,
        experience,
        contractType,
        isCity,
      ));
      if (Number(responseJobs.status) === 206) {
        responseStatus = 206;
      }
      res.status(responseStatus).send(responseJobs.data.resultats);
    }
    // Si l'utilisateur a renseigné au moins un langage
    else {
    // on boucle sur le tableau comportant les bases (technos)
    //  en faisant une requete pour chaque techno
      for (let index = 0; index < base.length; index++) {
        const responseJobs = await axios(createDataConfig(base[index],
          location,
          isDepartment,
          isFrenchState,
          minRange,
          responseToken,
          experience,
          contractType,
          isCity));
        if (Number(responseJobs.status) === 206) {
          responseStatus = 206;
        }
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
      // Puis on envoie la reponse au front
      console.log(responseStatus);
      res.status(responseStatus).send(filteredUNiqueResult);
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`listenning at port :${port}`);
});
