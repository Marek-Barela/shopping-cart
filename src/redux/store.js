import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [];

const middleware =
	process.env.NODE_ENV !== 'production'
		? composeWithDevTools(applyMiddleware(...middlewares))
		: middlewares;

const store = createStore(rootReducer, middleware);

export default store;
