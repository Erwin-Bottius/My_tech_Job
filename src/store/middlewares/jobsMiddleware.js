import axios from 'axios';
import {
  GET_JOBS,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  INCREMENT_REQUEST_MIN_RANGE,
  SET_STATUSCODE,

} from 'src/store/actions';

import departments from '../../../data/departments';
import frenchStates from '../../../data/states';

const jobsMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_JOBS) {
    // PARTIE LOCALISATION **********************************
    let isFrenchState = false;
    let isDepartment = false;
    let isCity = false;
    // Ici nous récupérons le state pour envoyer le jobds recherché + le code du département
    const state = store.getState();
    let location = '';
    if (state.search.locationSearched && state.locationSearched !== 'Toute la France') {
      // Si l'utilsateur a renseigné une valeur dans l'input localisation
      //  on recherche le département correspondant
      if (state.search.locationSearched === 'Autour de moi') {
        isCity = true;
        location = { code: state.search.cityCode };
      }
      else {
        location = departments.find((department) => (
          department.nom.toLowerCase() === state.search.locationSearched.toLowerCase()));
        if (location) isDepartment = true;
        // Si on ne trouve pas le département correspondant
        // alors on cherche dans le tableau des régions
        else {
          location = frenchStates.find((frenchState) => (
            frenchState.nom.toLowerCase() === state.search.locationSearched.toLowerCase()));
          if (location) isFrenchState = true;
        }
      }
      // Si l'utilisateur n'a pas entré de localisation ou que sa recherche est étendue sur
      // toute la France alors nous traiterons le cas en back
      // (la recherche s'éffectura donc sur toute la france dans les 2 cas)
    }

    // On requete le server qui lui meme requete l'API
    axios({
      method: 'post',
      url: process.env.URL || `${window.location.protocol}//${window.location.host}`,
      headers: {
        'content-type': 'application/json',
      },
      data: {
        base: state.search.jobSearched,
        location: location ? location.code : location,
        minRange: state.search.requestMinRange,
        isFrenchState,
        isDepartment,
        isCity,
        experience: state.search.filters.experienceValue,
        contractType: state.search.filters.contractTypeValue,
      },
    })
      .then((response) => {
        // SI l'api répond mais que la requete de l'utilisateur ne renvoit aucun résultat,
        // on émet l'action d'erreur
        if (response.data.length === 0 && state.search.requestMinRange === 0) {
          store.dispatch({ type: GET_JOBS_ERROR });
        }
        // Si nous recevons un tableau vide mais ce n'est pas la premiere requete
        // alors on met les statut 200 pour que le button loead more ne s'affiche plus
        else if (response.data.length === 0 && state.search.requestMinRange !== 0) {
          store.dispatch({
            type: SET_STATUSCODE,
            statusCode: 200,
          });
        }
        else {
          /* Ici nous mappons sur le tableau d'objets que l'api nous renvoit (les offres d'emplois)
          si il y a un logo dans l'objet, on return l'objet,
          sinon on ajoute la propriété avatarBgColor qui est une random color qui nous servira
          pour l'avatar de l'offre
          */
          const jobsArray = response.data.map((element) => (element.origineOffre.partenaires
            ? {
              ...element,
              isSelected: false,
            }
            : {
              ...element,
              avatarBgColor: `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`,
              isSelected: false,
            }));
          store.dispatch({
            type: GET_JOBS_SUCCESS,
            jobsResponse: jobsArray,
          });
          store.dispatch({ type: INCREMENT_REQUEST_MIN_RANGE });
          store.dispatch({
            type: SET_STATUSCODE,
            statusCode: response.status,
          });
        }
      })
      .catch(() => {
        store.dispatch({ type: GET_JOBS_ERROR });
      });
  }
  else {
    next(action);
  }
};

export default jobsMiddleware;
