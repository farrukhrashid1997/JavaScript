import {Navigator} from '../navigatorObjects/StackNavigator';
import PreLoginRoutes from '../routes/PreLoginRoutes';
import React from 'react';

export default () => (
  <Navigator>
    {PreLoginRoutes}
  </Navigator>
);
