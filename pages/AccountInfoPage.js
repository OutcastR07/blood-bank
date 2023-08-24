import React from "react";
import { StatusBar, View } from "react-native";
import AccountInfoHeader from "../components/AccountInfoPage/AccountInfoHeader";

const AccountInfoPage = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AccountInfoHeader />
    </View>
  );
};

export default AccountInfoPage;
