import { connect } from 'react-redux';
import Conversion from '../components/Conversion';

import {
	SERVICE_CL,
	SERVICE_FIXER,
	SERVICE_OER,
	SERVICE_NAB,
} from '../store/services';

import {
	getActiveService,
	getAmount,
	convert,
} from '../store';

import {
	useService,
} from '../store/actions';

const mapStateToProps = (state) => {
	const fromCode = 'AUD';
	const toCode = 'USD';
	const value = getAmount(state);
	const service = getActiveService(state);
	const converted = convert(state, service, value, fromCode, toCode);
	return {
		fromCode,
		toCode,
		value,
		service,
		converted,
		serviceOptions: [
			{ label: SERVICE_CL, value: SERVICE_CL },
			{ label: SERVICE_FIXER, value: SERVICE_FIXER },
			{ label: SERVICE_NAB, value: SERVICE_NAB },
			{ label: SERVICE_OER, value: SERVICE_OER },
		],
	};
};

const mapDispatchToProps = {
	onChangeService: useService,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Conversion);
