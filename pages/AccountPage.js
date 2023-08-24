import React from "react";
import { StatusBar, View } from "react-native";
import AccountPageHeader from "../components/AccountPageComponents/AccountPageHeader";

const AccountPage = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AccountPageHeader />
    </View>
  );
};

export default AccountPage;
