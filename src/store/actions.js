import {
	UPDATE_SERVICE,
	SET_ACTIVE_SERVICE,
} from './types';

import {
	SERVICE_OER,
	SERVICE_FIXER,
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

export const updateService = (service) => (dispatch) => {
	switch (service) {
		case SERVICE_OER:
			return updateOpenExchangeRates()(dispatch);
		case SERVICE_FIXER:
			return updateFixer()(dispatch);
		default:
			throw new Error(`Unrecognized service "${service}"`);
	}
};
