import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

// Ici nous utilisons redux-persist pour stocker le state dans un storage pour qu'il
// ne soit pas reset au refresh de la page
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
