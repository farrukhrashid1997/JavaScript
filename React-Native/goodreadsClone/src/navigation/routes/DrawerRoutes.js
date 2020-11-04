import {Screen} from '../navigatorObjects/DrawerNavigator';
import Home from '../../screens/Home';
import React from 'react';
import MyBooks from '../../screens/MyBooks';
import FindFriends from '../../screens/FindFriends';

const Routes = [
  <Screen name="Home" component={Home} key="Home"></Screen>,
  <Screen name="My Books" component={MyBooks} key="MyBooks"></Screen>,
  <Screen
    name="Find Friends"
    component={FindFriends}
    key="FindFriends"></Screen>,
];

export default Routes;
