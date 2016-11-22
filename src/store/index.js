import { combineReducers } from 'redux';
import currencies, * as currenciesModule from './currencies';
import rates, * as ratesModule from './rates';

export default combineReducers({
	currencies,
	rates,
});

export const getCurrencies = (state) => (
	currenciesModule.getCurrencies(state.currencies)
);

export const getCurrencyName = (state, code) => (
	currenciesModule.getCurrencyName(state.currencies, code)
);
