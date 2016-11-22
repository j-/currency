import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={ store }>
		<div />
	</Provider>,
	document.getElementById('app')
);
