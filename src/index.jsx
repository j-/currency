import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { prepareStore } from './store/prepare';
import App from './components/App';
import { useFixer } from './store/actions';

import 'elemental/less/elemental';
import './styles';

const store = prepareStore();

store.dispatch(
	useFixer()
);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);
