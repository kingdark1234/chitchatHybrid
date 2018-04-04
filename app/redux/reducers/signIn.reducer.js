import {SIGN_FACEBOOK, SIGN_GOOGLE, SIGN_EMAIL} from '../actions/index.action';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'

const facebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw new Error('User cancelled request'); // Handle this however fits the flow of your app
    }

    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    // login with credential
    const currentUser = await firebase.auth().signInWithCredential(credential);

    console.log(JSON.stringify(currentUser.toJSON()))
  } catch (e) {
    console.error(e);
  }
}



const signInReducer = (previousState = [], action) => {
	switch (action.type) {
	case SIGN_FACEBOOK:
  this.facebookLogin();
	case SIGN_GOOGLE:
		//return Utility.filterNotes(previousState, action.payload);
	case SIGN_EMAIL:
	//	return action.payload; 
	default:
		return previousState;
	}
};

export default signInReducer;