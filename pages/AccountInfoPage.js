import React from "react";
import { StatusBar, View } from "react-native";
import AccountInfoBody from "../components/AccountInfoPage/AccountInfoBody";
import AccountInfoHeader from "../components/AccountInfoPage/AccountInfoHeader";

const AccountInfoPage = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AccountInfoHeader />
      <AccountInfoBody />
    </View>
  );
};

export default AccountInfoPage;
