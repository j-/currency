import { connect } from 'react-redux';
import Conversion from '../components/Conversion';

import {
	convert,
} from '../store';

const mapStateToProps = (state) => {
	const fromCode = 'AUD';
	const toCode = 'USD';
	const value = 100;
	const service = 'openexchangerates.org';
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
