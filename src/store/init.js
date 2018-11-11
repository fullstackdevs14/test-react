import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import appReducer from './reducers';

export default () => {
  const logger = createLogger();

  const store = createStore(
    appReducer,
    applyMiddleware(logger)
  )

  return store;
}
