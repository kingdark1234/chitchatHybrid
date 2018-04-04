import SignIn from '../App';
import {StackNavigator} from 'react-navigation';

 
const RootNavigator = StackNavigator({
	Home: {
		screen: SignIn
	}
});

export default RootNavigator;