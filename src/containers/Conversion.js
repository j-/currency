import { connect } from 'react-redux';
import Conversion from '../components/Conversion';

import {
	getActiveService,
	convert,
} from '../store';

const mapStateToProps = (state) => {
	const fromCode = 'AUD';
	const toCode = 'USD';
	const value = 100;
	const service = getActiveService(state);
	const converted = convert(state, service, value, fromCode, toCode);
	return {
		fromCode,
		toCode,
		value,
		service,
		converted,
	};
};

export default connect(
	mapStateToProps
)(Conversion);
