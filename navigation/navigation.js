import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeIcon from '../images/interface-home-1.png';

import HomePage from '../pages/HomePage';

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name='HomePage' component={HomePage} />
    </HomeStack.Navigator>
  );
}

const HomeNavigation = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        sceneContainerStyle={style.container}
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: 'lightgray',
          tabBarInactiveBackgroundColor: '#fff',
          tabBarStyle: [
            {
              display: 'flex',
              // borderTopStartRadius: 20,
              // borderTopEndRadius: 20,
              // overflow: 'hidden',
              // marginTop: -5,
            },
            null,
          ],
        }}>
        <Tabs.Screen
          name='Home'
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({}) => (
              <Image source={homeIcon} style={{ height: 25, width: 25 }} />
            ),
          }}
        />
        <Tabs.Screen
          name='Services'
          component={HomePage}
          options={{
            tabBarIcon: ({}) => (
              <Image
                source={require('../images/interface-login-dial-pad-2.png')}
                style={{ height: 25, width: 25 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='Account'
          component={HomePage}
          options={{
            tabBarIcon: ({}) => (
              <Image
                source={require('../images/user-single-neutral.png')}
                style={{ height: 30, width: 25 }}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10,
  },
});

export default HomeNavigation;
