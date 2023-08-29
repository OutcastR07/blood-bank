import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeIcon from '../images/interface-home-1.png';

import HomePage from '../pages/HomePage';
import Services from '../pages/Services';
import AccountPage from '../pages/AccountPage';
import AccountInfoPage from '../pages/AccountInfoPage';
import HospitalDetailPage from '../pages/HospitalPage';
import HospitalsPage from '../pages/HospitalsPage';
import DoctorsPage from '../pages/DoctorsPage';
import DoctorDetailPage from '../pages/DoctorDetailPage';
import BloodBanksPage from '../pages/BloodBanksPage';
import BloodBankDetailPage from '../pages/BloodBankDetailPage';
import DiagnosticCentersPage from '../pages/DiagnosticCentersPage';
import DiagnosticCenterDetailPage from '../pages/DiagnosticCenter';
import DentalCentersPage from '../pages/DentalCentersPage';
import DentistDetailPage from '../pages/DentistPage';

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ServicesStack = createStackNavigator();
const AccountStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name='HomePage' component={HomePage} />
      <HomeStack.Screen
        name='HospitalDetailPage'
        component={HospitalDetailPage}
      />
      <HomeStack.Screen name='HospitalsPage' component={HospitalsPage} />
      <HomeStack.Screen name='ServicesPage' component={Services} />
      <HomeStack.Screen name='DoctorsPage' component={DoctorsPage} />
      <HomeStack.Screen
        name='DoctorDetailScreen'
        component={DoctorDetailPage}
      />
      <HomeStack.Screen name='BloodBanksPage' component={BloodBanksPage} />
      <HomeStack.Screen
        name='BloodBankDetailPage'
        component={BloodBankDetailPage}
      />
      <HomeStack.Screen
        name='DiagnosticCenter'
        component={DiagnosticCenterDetailPage}
      />
      <HomeStack.Screen
        name='DiagnosticCentersPage'
        component={DiagnosticCentersPage}
      />
      <HomeStack.Screen
        name='DentistCentersPage'
        component={DentalCentersPage}
      />
      <HomeStack.Screen
        name='DentistDetailPage'
        component={DentistDetailPage}
      />
    </HomeStack.Navigator>
  );
}

function ServicesStackScreen() {
  return (
    <ServicesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ServicesStack.Screen name='ServicesPage' component={Services} />
    </ServicesStack.Navigator>
  );
}

function AccountStackScreen() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Screen name='AccountInfoPage' component={AccountInfoPage} />
    </AccountStack.Navigator>
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
            tabBarIcon: () => (
              <Image source={homeIcon} style={{ height: 25, width: 25 }} />
            ),
          }}
        />
        <Tabs.Screen
          name='Services'
          component={ServicesStackScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../images/interface-login-dial-pad-2.png')}
                style={{ height: 25, width: 25 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='Account'
          component={AccountStackScreen}
          options={{
            tabBarIcon: () => (
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
