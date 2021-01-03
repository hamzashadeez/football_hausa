import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserProvider} from './Context/UserContext';

import AppStack from './Screens/AppStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
    </UserProvider>
  );
};

export default App;