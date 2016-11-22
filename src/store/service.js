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

export default (service) => (state = {}, action) => {
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
