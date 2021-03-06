import { combineReducers } from 'redux';
import app, * as appModule from './app';
import currencies, * as currenciesModule from './currencies';
import services, * as servicesModule from './services';
import favorites, * as favoritesModule from './favorites';

export default combineReducers({
	app,
	currencies,
	services,
	favorites,
});

export const getActiveService = (state) => (
	appModule.getActiveService(state.app)
);

export const getAmount = (state) => (
	appModule.getAmount(state.app)
);

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

export const getFavoriteCodes = (state) => (
	favoritesModule.getFavoriteCodes(state.favorites)
);
