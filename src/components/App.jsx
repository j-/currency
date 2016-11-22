import React from 'react';
import Conversion from '../containers/Conversion';
import CurrenciesList from '../containers/CurrenciesList';

const App = () => (
	<div>
		<h1>Currencies</h1>
		<Conversion />
		<CurrenciesList />
	</div>
);

export default App;
