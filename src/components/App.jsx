import React from 'react';
import Command from './Command';
import Conversion from '../containers/Conversion';
import CurrenciesList from '../containers/CurrenciesList';

const App = () => (
	<div className="app">
		<h1>Currencies</h1>
		<Command autoFocus size="lg" />
		<Conversion />
		<CurrenciesList />
	</div>
);

export default App;
