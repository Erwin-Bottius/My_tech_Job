import axios from 'axios';
import {
  GET_JOBS,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  INCREMENT_REQUEST_MIN_RANGE,

} from 'src/store/actions';

import departments from '../../../data/departments';
import frenchStates from '../../../data/states';

const jobsMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_JOBS) {
    let isFrenchState = false;
    let isDepartment = false;
    // Ici nous récupérons le state pour envoyer le jobds recherché + le code du département
    const state = store.getState();
    let location = '';
    // Si l'utilsateur a renseigné une valeur dans l'input localisation
    //  on recherche le département correspondant
    if (state.search.locationSearched) {
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
    // On requete le server qui lui meme requete l'API
    axios({
      method: 'post',
      url: 'http://localhost:3000',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        base: state.search.jobSearched,
        location: location ? location.code : location,
        rangeMin: state.requestMinRange,
        isFrenchState,
        isDepartment,
      },
    })
      .then((response) => {
        // SI l'api répond mais que la requete de l'utilisateur ne renvoit aucun résultat,
        // on émet l'action d'erreur
        if (response.data.length === 0 && state.search.requestMinRange === 0) {
          store.dispatch({ type: GET_JOBS_ERROR });
        }
        else {
          store.dispatch({
            type: GET_JOBS_SUCCESS,
            jobsResponse: response.data,
          });
          store.dispatch({ type: INCREMENT_REQUEST_MIN_RANGE });
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
