import React from 'react';
import { StatusBar, View } from 'react-native';
import AccountBody from '../components/AccountPageComponents/AccountBody';
import AccountHeader from '../components/AccountPageComponents/AccountHeader';

const AccountPage = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <AccountHeader navigation={navigation} />
      <AccountBody navigation={navigation} />
    </View>
  );
};

export default AccountPage;
