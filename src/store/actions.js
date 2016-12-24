import 'whatwg-fetch';

import {
	UPDATE_SERVICE,
	SET_ACTIVE_SERVICE,
	SET_CONVERSION_AMOUNT,
	SET_FAVORITE_CODES,
} from './types';

import {
	SERVICE_OER,
	SERVICE_FIXER,
	SERVICE_CL,
	SERVICE_NAB,
} from './services';

export const updateOpenExchangeRates = () => (dispatch) => {
	const key = process.env.KEY_OER;
	if (!key) {
		throw new Error('OpenExchangeRates.org application ID not set');
	}
	const uri = `https://openexchangerates.org/api/latest.json?app_id=${key}`;
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
	const key = process.env.KEY_CL;
	if (!key) {
		throw new Error('CurrencyLayer.com access key not set');
	}
	const uri = `http://www.apilayer.net/api/live?access_key=${key}&format=2`;
	fetch(uri)
		.then((response) => response.json())
		.then((response) => {
			if (response.error) {
				throw new Error(response.error.info);
			}
			return response;
		})
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

export const updateNAB = () => (dispatch) => {
	const key = process.env.KEY_NAB;
	if (!key) {
		throw new Error('NAB.com.au API key not set');
	}
	const uri = 'https://api.developer.nab.com.au/v2/fxrates?v=1';
	const options = {
		headers: {
			'X-NAB-KEY': key,
		},
	};
	fetch(uri, options)
		.then((response) => response.json())
		.then((payload) => payload.fxRatesResponse)
		.then((response) => {
			const rates = {};
			response.fxRates.forEach((rate) => {
				rates[rate.buyCurrency] = Number(rate.currentBuyRate);
			});
			dispatch({
				type: UPDATE_SERVICE,
				service: SERVICE_NAB,
				timestamp: (new Date(response.lastUpdatedDate)).getTime(),
				base: response.fxRates[0].sellCurrency,
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

export const useNAB = () => (dispatch) => {
	dispatch({
		type: SET_ACTIVE_SERVICE,
		service: SERVICE_NAB,
	});
	return updateNAB()(dispatch);
};

export const useService = (service) => (dispatch) => {
	dispatch({
		type: SET_ACTIVE_SERVICE,
		service: service,
	});
	return updateService(service)(dispatch);
};

export const updateService = (service) => (dispatch) => {
	switch (service) {
		case SERVICE_OER:
			return updateOpenExchangeRates()(dispatch);
		case SERVICE_FIXER:
			return updateFixer()(dispatch);
		case SERVICE_CL:
			return updateCurrencyLayer()(dispatch);
		case SERVICE_NAB:
			return updateNAB()(dispatch);
		default:
			throw new Error(`Unrecognized service "${service}"`);
	}
};

export const setAmount = (amount) => ({
	type: SET_CONVERSION_AMOUNT,
	amount,
});

export const setFavoriteCodes = (codes) => ({
	type: SET_FAVORITE_CODES,
	codes,
});
