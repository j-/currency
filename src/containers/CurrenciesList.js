import { connect } from 'react-redux';
import CurrenciesList from '../components/CurrenciesList';

import {
	getCurrencies,
} from '../store';

const mapStateToProps = (state) => ({
	currencies: getCurrencies(state),
});

export default connect(
	mapStateToProps
)(CurrenciesList);
