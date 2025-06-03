/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import LandingScreen from './screens/LandingScreen';


const App = () => {


  return (
    <NavigationContainer>
        <LandingScreen />
    </NavigationContainer>
    );
};



export default App;
