import { combineReducers } from 'redux';
import currencies, * as currenciesModule from './currencies';
import services, * as servicesModule from './services';

import {
	SERVICE_OER,
} from './services';

export default combineReducers({
	currencies,
	services,
});

export const getCurrencies = (state) => (
	currenciesModule.getCurrencies(state.currencies)
);

export const getCurrencyName = (state, code) => (
	currenciesModule.getCurrencyName(state.currencies, code)
);
