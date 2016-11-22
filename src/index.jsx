import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { prepareStore } from './store/prepare';

const store = prepareStore();

ReactDOM.render(
	<Provider store={ store }>
		<div />
	</Provider>,
	document.getElementById('app')
);
