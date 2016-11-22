import { combineReducers } from 'redux';
import currencies, * as currenciesModule from './currencies';

export default combineReducers({
	currencies,
});

export const getCurrencies = (state) => (
	currenciesModule.getCurrencies(state.currencies)
);

export const getCurrencyName = (state, code) => (
	currenciesModule.getCurrencyName(state.currencies, code)
);
