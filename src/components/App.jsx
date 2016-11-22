import React from 'react';
import Command from './Command';
import Conversion from '../containers/Conversion';
import CurrenciesList from '../containers/CurrenciesList';

const App = () => (
	<div>
		<h1>Currencies</h1>
		<Command />
		<Conversion />
		<CurrenciesList />
	</div>
);

export default App;
