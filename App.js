import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import MainNavigation from './navigation/MainNavigation';
import {AlertNotificationRoot} from 'react-native-alert-notification';

const App = () => {
  return (
    <AlertNotificationRoot>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </AlertNotificationRoot>
  );
};

export default App;
