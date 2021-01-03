import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Screens/Home';
import Videos from '../Screens/Videos';
import Profile from '../Screens/Profile';

MainStack = () => {
  const Tab = createBottomTabNavigator();
  const tabBarOptions = {
      showLabel: false,
      style: {
          backgroundColor: '#111',
          paddingBottom: 10,
          paddingTop: 5
      }
  }

  const screenOptions = ({route})=>({
      tabBarIcon: ({focused})=>{
            let iconName = 'desktop'
            switch (route.name){
                case'home':
                    iconName = 'ios-home';
                    break;
                case'profile':
                    iconName = 'ios-person';
                    break;
                case'videos':
                    iconName = 'ios-person';
                    break;
               
            }
            return <Icon name={iconName} size={24} color={focused ? "#fff": '#fff'} />;
      }
  });
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="videos" component={Videos} />
    </Tab.Navigator>
  );
};

export default MainStack;