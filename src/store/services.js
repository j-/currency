import { combineReducers } from 'redux';
import service, * as serviceModule from './service';

export const SERVICE_OER = 'openexchangerates.org';
export const SERVICE_FIXER = 'fixer.io';
export const SERVICE_CL = 'currencylayer.com';
export const SERVICE_NAB = 'nab.com.au';

export default combineReducers({
	[SERVICE_OER]: service(SERVICE_OER),
	[SERVICE_FIXER]: service(SERVICE_FIXER),
	[SERVICE_CL]: service(SERVICE_CL),
	[SERVICE_NAB]: service(SERVICE_NAB),
});

const getServiceState = (state, service) => {
	if (service in state) {
		return state[service];
	}
	throw new Error(`Unrecognized service "${service}"`);
};

export const getBase = (state, service) => (
	serviceModule.getBase(
		getServiceState(state, service)
	)
);

export const getRate = (state, service, code) => (
	serviceModule.getRate(
		getServiceState(state, service),
		code
	)
);

export const convert = (state, service, value, fromCode, toCode) => (
	serviceModule.convert(
		getServiceState(state, service),
		value,
		fromCode,
		toCode
	)
);
