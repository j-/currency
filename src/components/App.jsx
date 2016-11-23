import React from 'react';
import Command from '../containers/Command';
import Conversion from '../containers/Conversion';
import FavoritesTable from '../containers/FavoritesTable';
import CurrenciesList from '../containers/CurrenciesList';

const App = () => (
	<div className="app">
		<h1>Currencies</h1>
		<Command autoFocus size="lg" />
		<hr />
		<Conversion />
		<hr />
		<FavoritesTable />
		<hr />
		<CurrenciesList />
	</div>
);

export default App;
