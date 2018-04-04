import noop from 'lodash/noop';
import ProptTypes from 'prop-types';
import React, {Component} from 'react';
import Router from './routes/index';
import {addNavigationHelpers} from 'react-navigation';
import {connect, Provider} from 'react-redux';
import initStore from './redux/store';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

const store = initStore();
class chitchatHybrid extends Component {
	render () {
		return (
			<Provider store={store}>
				<ConnectedRouter />
			</Provider>
		);
	}
}

  
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
  const addListener = createReduxBoundAddListener("root");

class ReduxRouter extends Component {
	render () {
		const {dispatch, nav} = this.props;
		const navigation = addNavigationHelpers({dispatch, state: nav,addListener});
        return <Router navigation={navigation} />;
	}
}

const mapStateToProps = (state) => ({nav: state.nav});

const ConnectedRouter = connect(mapStateToProps)(ReduxRouter);

ReduxRouter.propTypes = {
	dispatch: ProptTypes.func.isRequired,
	nav: ProptTypes.object.isRequired
};
  
ReduxRouter.defaultProps = {
	dispatch: noop,
	nav: null
};

export default chitchatHybrid;