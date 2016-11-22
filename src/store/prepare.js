import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './';

export const prepareStore = (initialState = null, enhancers = compose) => {
	if (window.__REDUX_DEVTOOLS_EXTENSION__) {
		enhancers = compose(enhancers, window.__REDUX_DEVTOOLS_EXTENSION__());
	}
	return createStore(reducer, enhancers);
};
