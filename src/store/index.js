import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import jobsMiddleware from 'src/store/middlewares/jobsMiddleware';
import storage from 'redux-persist/lib/storage';
import reducer from 'src/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Ici nous utilisons redux-persist pour stocker le state dans un storage pour qu'il
// ne soit pas reset au refresh de la page
const persistConfig = {
  key: 'root',
  storage,
};

const enhancers = composeEnhancers(
  applyMiddleware(
    jobsMiddleware,
  ),
);

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
