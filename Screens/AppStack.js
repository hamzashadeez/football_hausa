import React, {useContext} from 'react';
import Login from './Login';
import SignUp from './SignUp';
import FlashScreen from './FlashScreen';
import MainStack from './MainStack';
import {UserContext} from '../Context/UserContext';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = () => {
  const [user] = useContext(UserContext);
  const AppStackX = createStackNavigator();
  return (
    <AppStackX.Navigator>
      {user.isSigned === null ? (
        <AppStackX.Screen
          name="FlashScreen"
          component={FlashScreen}
          options={{headerShown: false}}
        />
      ) : user.isSigned ? (
        <>
          <AppStackX.Screen
            name="Main"
            component={MainStack}
            options={{headerShown: false}}
          />
          
        </>
      ) : (
        <>
          <AppStackX.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <AppStackX.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </>
      )}
    </AppStackX.Navigator>
  );
};

export default AppStack;