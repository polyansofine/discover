import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers';
import rootSaga from '../saga';

const bindMiddleware = (middleware) => applyMiddleware(...middleware);

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      bindMiddleware([sagaMiddleware]),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );

  const isClient = typeof window !== 'undefined';

  if (isClient) {
    // eslint-disable-next-line no-underscore-dangle
    store.__PERSISTOR = persistStore(store);
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;