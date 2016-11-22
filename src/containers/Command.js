import { connect } from 'react-redux';
import Command from '../components/Command';

import {
	getCurrencies,
} from '../store';

import {
	setAmount,
} from '../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
	onChangeValues: ({ value, fromCode, toCode }) => {
		dispatch(
			setAmount(value)
		);
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Command);
