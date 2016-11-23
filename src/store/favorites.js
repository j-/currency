import {
	SET_FAVORITE_CODES,
} from './types';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_FAVORITE_CODES:
			return [...action.codes];
		default:
			return state;
	}
};

export const getFavoriteCodes = (state) => (
	state
);
