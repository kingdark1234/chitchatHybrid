/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './App.style';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {facebook} from '../app/redux/actions/index.action';


 class App extends Component{

	_SignFacebook = () => this.props.signFacebook();

	render() {
		return (
			<View style={styles.container}>
				<Text>Please SignIn</Text>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this._SignFacebook}>
          Login with Facebook
        </Icon.Button>
        <Icon.Button name="google" backgroundColor="#db4437">
          Login with Google+
        </Icon.Button>
        <Icon.Button name="envelope" backgroundColor="#ddd">
          Login with Email
        </Icon.Button>
				{/* <TouchableOpacity class={}><Icon name="social-facebook" color="#fff" />Facebook</TouchableOpacity>
				<TouchableOpacity class={styles.google}><Icon name="social-social-google-plus" color="#fff" />Google</TouchableOpacity>
				<TouchableOpacity class={styles.email}><Icon name="mail" color="#fff" />Email</TouchableOpacity> */}
			</View>
		);
	}
}


export const mapDispatchToProps = (dispatch) => ({
  signFacebook: bindActionCreators(facebook, dispatch)
});

export default connect((storeState)=>{return{}},mapDispatchToProps)(App);

