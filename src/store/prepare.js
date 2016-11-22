import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './';

const middleware = [
	thunk,
];

export const prepareStore = (initialState = null, enhancers = compose) => {
	// Add middleware enhancers
	enhancers = compose(enhancers, applyMiddleware(...middleware));
	// Add Redux devtools extension enhancer if it exists
	if (window.__REDUX_DEVTOOLS_EXTENSION__) {
		enhancers = compose(enhancers, window.__REDUX_DEVTOOLS_EXTENSION__());
	}
	return createStore(reducer, enhancers);
};
