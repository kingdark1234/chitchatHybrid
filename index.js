import { AppRegistry } from 'react-native';
import routeIndex from './app/routeIndex';

if (__DEV__) {
	global.XMLHttpRequest = global.originalXMLHttpRequest ?
		global.originalXMLHttpRequest :
		global.XMLHttpRequest;
	global.FormData = global.originalFormData ?
		global.originalFormData :
		global.FormData;
}

AppRegistry.registerComponent('chitchatHybrid', () => routeIndex);
