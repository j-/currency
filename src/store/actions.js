import {
	UPDATE_SERVICE,
} from './types';

import {
	SERVICE_OER,
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
				timestamp: response.timestamp,
				base: response.base,
				rates: response.rates,
			});
		});
};

export const updateService = (service) => (dispatch) => {
	switch (service) {
		case SERVICE_OER:
			return updateOpenExchangeRates()(dispatch);
	}
};
