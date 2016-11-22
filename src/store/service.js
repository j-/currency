/*

  {
    "timestamp": "1479783607",
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

export const convert = (state, value, fromCode, toCode) => (
	(value / getRate(state, fromCode)) * getRate(state, toCode)
);
