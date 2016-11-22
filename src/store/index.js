import { combineReducers } from 'redux';
import app, * as appModule from './app';
import currencies, * as currenciesModule from './currencies';
import services, * as servicesModule from './services';

import {
	SERVICE_OER,
} from './services';

export default combineReducers({
	app,
	currencies,
	services,
});

export const getCurrencies = (state) => (
	currenciesModule.getCurrencies(state.currencies)
);

export const getCurrencyName = (state, code) => (
	currenciesModule.getCurrencyName(state.currencies, code)
);

export const getBase = (state, service) => (
	servicesModule.getBase(state.services, service)
);

export const getRate = (state, service, code) => (
	servicesModule.getRate(state.services, service, code)
);

export const convert = (state, service, value, fromCode, toCode) => (
	servicesModule.convert(state.services, service, value, fromCode, toCode)
);
