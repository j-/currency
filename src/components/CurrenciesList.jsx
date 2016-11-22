import React, { PropTypes } from 'react';
import CurrenciesListItem from './CurrenciesListItem';

const renderCurrencies = (currencies) => (
	currencies.map((currency) => (
		<CurrenciesListItem
			key={ currency[0] }
			code={ currency[0] }
			name={ currency[1] }
		/>
	))
);

const CurrenciesList = ({ currencies }) => (
	<ul>{ renderCurrencies(currencies) }</ul>
);

CurrenciesList.propTypes = {
	currencies: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.string
		)
	).isRequired,
};

export default CurrenciesList;
