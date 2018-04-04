import {combineReducers} from 'redux';
import Router from '../../routes/index';
const nav = (state, action) => (
	Router.router.getStateForAction(action, state) || state
);
export default combineReducers({
	nav
});