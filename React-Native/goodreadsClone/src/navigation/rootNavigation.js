import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';
import PreLoginNavigator from './navigators/PreLoginNavigator';

const {Navigator, Screen} = createStackNavigator();

const rootNavigation = () => (
  <NavigationContainer>
    <Navigator>
      {/* <Screen
        name="PreLogin"
        component={PreLoginNavigator}
        options={{
          headerShown: false,
        }}></Screen> */}
      <Screen
        name="Homepage"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default rootNavigation;
