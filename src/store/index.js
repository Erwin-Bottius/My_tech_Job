import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import jobsMiddleware from 'src/store/middlewares/jobsMiddleware';
import storage from 'redux-persist/lib/storage';
import reducer from 'src/store/reducers';
import getCityCodeMiddleware from './middlewares/getCitycodeMiddleware';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
}) || compose;

// Ici nous utilisons redux-persist pour stocker le state dans un storage pour qu'il
// ne soit pas reset au refresh de la page
const persistConfig = {
  key: 'root',
  storage,
};

const enhancers = composeEnhancers(
  applyMiddleware(
    getCityCodeMiddleware,
    jobsMiddleware,
  ),
);

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
