import React from 'react';
import { StatusBar, View } from 'react-native';
import AccountInfoBody from '../components/AccountInfoPageComponents/AccountInfoBody';
import AccountInfoHeader from '../components/AccountInfoPageComponents/AccountInfoHeader';

const AccountInfoPage = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <AccountInfoHeader navigation={navigation} />
      <AccountInfoBody navigation={navigation} />
    </View>
  );
};

export default AccountInfoPage;
