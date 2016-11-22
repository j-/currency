import {
	UPDATE_SERVICE,
} from './types';

/*

  {
    "timestamp": 1479783607,
    "base": "USD",
    "rates": {
      "AED": 3.6728,
      "AUD": 1.353438,
      ...
    }
  }

*/

const DEFAULT_STATE = {
	timestamp: null,
	base: null,
	rates: {},
};

export default (service) => (state = DEFAULT_STATE, action) => {
	// Ignore updates to unrecognised services
	if (action.service !== service) {
		return state;
	}
	switch (action.type) {
		case UPDATE_SERVICE:
			return {
				...state,
				timestamp: action.timestamp,
				base: action.base,
				rates: {
					...state.rates,
					...action.rates,
				},
			};
		default:
			return state;
	}
};

export const getBase = (state) => (
	state.base || null
);

export const getRate = (state, code) => (
	state.rates[code] || null
);

export const convert = (state, value, fromCode, toCode) => {
	if (value === null || isNaN(value)) {
		return null;
	}
	const fromRate = getRate(state, fromCode);
	if (fromRate === null) {
		return null;
	}
	const toRate = getRate(state, toCode);
	if (toRate === null) {
		return null;
	}
	return (value / fromRate) * toRate;
};
