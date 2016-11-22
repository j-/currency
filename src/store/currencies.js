// From: https://openexchangerates.org/api/currencies.json
import DEFAULT_CURRENCIES from './default-currencies';

export default (state = DEFAULT_CURRENCIES, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
