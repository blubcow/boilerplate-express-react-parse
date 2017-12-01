import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation';

import Parse from '../parse-store/parse-browser';

/*
Parse.initialize(appId);
Parse.serverURL = serverURL;
window.Parse = Parse;
*/
export default class App extends Component {

    /*async isLoggedIn() {
      const user = await Parse.User.currentAsync();
      if(user){
        Actions.drawer();
      }else{
        Actions.loginScreen();
      }
    }*/

    render() {
    	//this.isLoggedIn();
    	return (
        	<Navigation/>
        );
    }
}