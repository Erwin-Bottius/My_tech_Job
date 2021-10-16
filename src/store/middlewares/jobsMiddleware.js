import axios from 'axios';
import {
  GET_JOBS,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
} from 'src/store/actions';

import departments from '../../../data/departments';

const jobsMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_JOBS) {
    // Ici nous récupérons le state pour envoyer le jobds recherché + le code du département
    const state = store.getState();
    const location = departments.find((department) => (
      department.nom.toLowerCase() === state.search.locationSearched.toLowerCase()));

    // On requete le server qui lui meme requete l'API
    axios({
      method: 'post',
      url: 'http://localhost:3000',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        base: state.search.jobSearched,
        location: location.code,
      },
    })
      .then((response) => {
        // SI l'api répond mais que la requete de l'utilisateur ne renvoit aucun résultat,
        // on émet l'action d'erreur
        if (response.data.resultats.length === 0) {
          store.dispatch({ type: GET_JOBS_ERROR });
        }
        else {
          store.dispatch({
            type: GET_JOBS_SUCCESS,
            jobsResponse: response.data.resultats,
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
