import {
	UPDATE_SERVICE,
	SET_ACTIVE_SERVICE,
} from './types';

import {
	SERVICE_OER,
	SERVICE_FIXER,
	SERVICE_CL,
} from './services';

export const updateOpenExchangeRates = () => (dispatch) => {
	const appID = process.env.APP_ID_OER;
	if (!appID) {
		throw new Error('OpenExchangeRates.org application ID not set');
	}
	const uri = `https://openexchangerates.org/api/latest.json?app_id=${appID}`;
	fetch(uri)
		.then((response) => response.json())
		.then((response) => {
			dispatch({
				type: UPDATE_SERVICE,
				service: SERVICE_OER,
				timestamp: response.timestamp * 1000,
				base: response.base,
				rates: response.rates,
			});
		});
};

export const updateFixer = () => (dispatch) => {
	fetch('https://api.fixer.io/latest')
		.then((response) => response.json())
		.then((response) => {
			dispatch({
				type: UPDATE_SERVICE,
				service: SERVICE_FIXER,
				timestamp: (new Date(response.date)).getTime(),
				base: response.base,
				rates: response.rates,
			});
		});
};

export const updateCurrencyLayer = () => (dispatch) => {
	const appID = process.env.APP_ID_CL;
	if (!appID) {
		throw new Error('CurrencyLayer.com access key not set');
	}
	const uri = `http://www.apilayer.net/api/live?access_key=${appID}&format=2`;
	fetch(uri)
		.then((response) => response.json())
		.then((response) => {
			const rates = {};
			const quotes = response.quotes;
			Object.keys(quotes).forEach((key) => {
				const code = key.substring(3);
				const rate = quotes[key];
				rates[code] = rate;
			});
			dispatch({
				type: UPDATE_SERVICE,
				service: SERVICE_CL,
				timestamp: response.timestamp * 1000,
				base: response.source,
				rates,
			});
		});
};

export const useOpenExchangeRates = () => (dispatch) => {
	dispatch({
		type: SET_ACTIVE_SERVICE,
		service: SERVICE_OER,
	});
	return updateOpenExchangeRates()(dispatch);
};

export const useFixer = () => (dispatch) => {
	dispatch({
		type: SET_ACTIVE_SERVICE,
		service: SERVICE_FIXER,
	});
	return updateFixer()(dispatch);
};

export const useCurrencyLayer = () => (dispatch) => {
	dispatch({
		type: SET_ACTIVE_SERVICE,
		service: SERVICE_CL,
	});
	return updateCurrencyLayer()(dispatch);
};

export const updateService = (service) => (dispatch) => {
	switch (service) {
		case SERVICE_OER:
			return updateOpenExchangeRates()(dispatch);
		case SERVICE_FIXER:
			return updateFixer()(dispatch);
		case SERVICE_CL:
			return updateCurrencyLayer()(dispatch);
		default:
			throw new Error(`Unrecognized service "${service}"`);
	}
};
