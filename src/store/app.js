import {
	SET_ACTIVE_SERVICE,
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
		default:
			return state;
	}
};

export const getActiveService = (state) => (
	state.activeService
);
