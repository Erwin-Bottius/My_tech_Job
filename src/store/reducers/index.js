import { combineReducers } from 'redux';
import { RESET_STATES } from 'src/store/actions';

import searchReducer from './search';

const appReducer = combineReducers({
  search: searchReducer,
});
// Réducer qui renvoit le state initiale (lorsque l'utilisateur retourne sur la page home)
const rootReducer = (state, action) => {
  if (action.type === RESET_STATES) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
