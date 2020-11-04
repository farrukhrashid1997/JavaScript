import SignUp from '../../screens/SignUp';
import Login from '../../screens/Login';
import {Screen} from '../navigatorObjects/StackNavigator';
import React from 'react';

const Routes = [
  <Screen
    key="SignUp"
    name="Sign Up"
    component={SignUp}
    options={{headerShown: false}}></Screen>,
  <Screen
    key="Log In"
    name="Log In"
    component={Login}
    options={{
      headerStyle: {
        backgroundColor: '#f4f1ea',
      },
      headerTintColor: '#382110',
    }}></Screen>,
];

export default Routes;
