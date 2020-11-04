import {Navigator} from '../navigatorObjects/DrawerNavigator';
import DrawerRoutes from '../routes/DrawerRoutes';
import React from 'react';
import NavigationDrawer from '../../components/NavigationDrawer';

export default () => (
  <Navigator drawerContent={NavigationDrawer}>{DrawerRoutes}</Navigator>
);
