import {
	SET_ACTIVE_SERVICE,
	SET_CONVERSION_AMOUNT,
} from './types';

const DEFAULT_STATE = {
	activeService: null,
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_ACTIVE_SERVICE:
			return {
				...state,
				activeService: action.service,
			};
		case SET_CONVERSION_AMOUNT:
			return {
				...state,
				amount: action.amount,
			};
		default:
			return state;
	}
};

export const getActiveService = (state) => (
	state.activeService
);
