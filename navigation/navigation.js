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
import FundSomeonePage from '../pages/FundSomeonePage';
import FundAskingPage from '../pages/FundAskingPage';
import CrowdFundingApplicationPage from '../pages/CrowdFundingApplicationPage';
import SaveSomeoneTodayPage from '../pages/SaveSomeoneTodayPage';
import RequestBloodPage from '../pages/RequestBloodPage';
import DonateBloodPage from '../pages/DonateBloodPage';
import BloodRequestPage from '../pages/BloodRequestPage';
import BloodReceivedPage from '../pages/BloodReceivedPage';
import LoginPage from '../pages/LoginPage';
import NumberVerificationPage from '../pages/NumberVerificationPage';
import CreateAccountPage from '../pages/CreateAccountPage';
import ListMessages from '../pages/ListMessages';
import Messages from '../pages/Messages';
import ContactRequestPage from '../pages/ContactRequestPage';
import SavedItems from '../pages/SavedItems';
import NotificationPage from '../pages/Notification';
import Settings from '../pages/Settings';
import EditNamePage from '../pages/EditNamePage';
import EditPhoneNumberPage from '../pages/EditPhoneNumberPage';
import EditEmailAddressPage from '../pages/EditEmailAddressPage';

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
      <HomeStack.Screen name='FundSomeonePage' component={FundSomeonePage} />
      <HomeStack.Screen name='AskingForFundPage' component={FundAskingPage} />
      <HomeStack.Screen
        name='ApplyForCrowdFunding'
        component={CrowdFundingApplicationPage}
      />
      <HomeStack.Screen
        name='SaveSomeoneToday'
        component={SaveSomeoneTodayPage}
      />
      <HomeStack.Screen name='RequestBloodPage' component={RequestBloodPage} />
      <HomeStack.Screen name='DonateBloodPage' component={DonateBloodPage} />
      <HomeStack.Screen name='BloodRequestPage' component={BloodRequestPage} />
      <HomeStack.Screen
        name='BloodReceivedPage'
        component={BloodReceivedPage}
      />
      <HomeStack.Screen name='LoginPage' component={LoginPage} />
      <HomeStack.Screen
        name='RequestVerificationCode'
        component={NumberVerificationPage}
      />
      <HomeStack.Screen
        name='CreateAccountPage'
        component={CreateAccountPage}
      />
      {/* <HomeStack.Screen name='' component={}/> */}
      {/* <HomeStack.Screen name='' component={}/> */}
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
      <ServicesStack.Screen
        name='HospitalDetailPage'
        component={HospitalDetailPage}
      />
      <ServicesStack.Screen name='HospitalsPage' component={HospitalsPage} />
      <ServicesStack.Screen name='DoctorsPage' component={DoctorsPage} />
      <ServicesStack.Screen
        name='DoctorDetailScreen'
        component={DoctorDetailPage}
      />
      <ServicesStack.Screen name='BloodBanksPage' component={BloodBanksPage} />
      <ServicesStack.Screen
        name='BloodBankDetailPage'
        component={BloodBankDetailPage}
      />
      <ServicesStack.Screen
        name='DiagnosticCenter'
        component={DiagnosticCenterDetailPage}
      />
      <ServicesStack.Screen
        name='DiagnosticCentersPage'
        component={DiagnosticCentersPage}
      />
      <ServicesStack.Screen
        name='DentistCentersPage'
        component={DentalCentersPage}
      />
      <ServicesStack.Screen
        name='DentistDetailPage'
        component={DentistDetailPage}
      />
    </ServicesStack.Navigator>
  );
}

function AccountStackScreen() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Screen name='AccountPage' component={AccountPage} />
      <AccountStack.Screen name='ListMessages' component={ListMessages} />
      <AccountStack.Screen name='Messages' component={Messages} />
      <AccountStack.Screen name='SavedItems' component={SavedItems} />
      <AccountStack.Screen name='Notifications' component={NotificationPage} />
      <AccountStack.Screen name='Settings' component={Settings} />
      <AccountStack.Screen name='AccountInfoPage' component={AccountInfoPage} />
      <AccountStack.Screen name='EditNamePage' component={EditNamePage} />
      <AccountStack.Screen
        name='EditPhoneNumberPage'
        component={EditPhoneNumberPage}
      />
      <AccountStack.Screen
        name='EditEmailAddressPage'
        component={EditEmailAddressPage}
      />
      <AccountStack.Screen
        name='ContactRequestPage'
        component={ContactRequestPage}
      />
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
