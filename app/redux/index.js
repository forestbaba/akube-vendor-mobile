import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools || compose;

const middlewares = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
