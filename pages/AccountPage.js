import React from "react";
import { StatusBar, View } from "react-native";
import AccountBody from "../components/AccountPageComponents/AccountBody";
import AccountHeader from "../components/AccountPageComponents/AccountHeader";

const AccountPage = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AccountHeader />
      <AccountBody />
    </View>
  );
};

export default AccountPage;
