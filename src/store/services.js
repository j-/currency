import { combineReducers } from 'redux';
import service from './service';

export const SERVICE_OER = 'openexchangerates.org';

export default combineReducers({
	[SERVICE_OER]: service(SERVICE_OER),
});
