import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { prepareStore } from './store/prepare';
import App from './components/App';
import { updateOpenExchangeRates } from './store/actions';

const store = prepareStore();

store.dispatch(
	updateOpenExchangeRates()
);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);
