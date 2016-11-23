import { connect } from 'react-redux';
import FavoritesTable from '../components/FavoritesTable';

import {
	getActiveService,
	getFavoriteCodes,
	convert,
} from '../store';

const mapStateToProps = (state) => {
	const service = getActiveService(state);
	const amount = 1;
	return {
		codes: getFavoriteCodes(state),
		convert: (fromCode, toCode) => (
			convert(state, service, amount, fromCode, toCode)
		),
	};
};

export default connect(
	mapStateToProps
)(FavoritesTable);
