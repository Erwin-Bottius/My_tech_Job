import axios from 'axios';
import {
  GET_CITYCODE_GEOLOCATION,
  GET_CITYCODE_GEOLOCATION_SUCCESS,
  SET_GEOLOCATION_LOADING,
} from 'src/store/actions';

const getCityCodeMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_CITYCODE_GEOLOCATION) {
    const config = {
      method: 'get',
      url: `https://api-adresse.data.gouv.fr/reverse/?lon=${action.longitude}&lat=${action.latitude}`,
      headers: { },
    };
    axios(config)
      .then((response) => {
        if (response.data.features[0].properties.citycode) {
          store.dispatch({
            type: GET_CITYCODE_GEOLOCATION_SUCCESS,
            cityCode: response.data.features[0].properties.citycode,
          });
        }
        store.dispatch({ type: SET_GEOLOCATION_LOADING });
      })
      .catch((error) => {
        store.dispatch({ type: SET_GEOLOCATION_LOADING });
        console.log(error);
      });
  }
  else {
    next(action);
  }
};
export default getCityCodeMiddleware;
