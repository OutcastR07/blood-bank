import React from "react";
import { StatusBar, View } from "react-native";
import FundingApplicationHeader from "../components/FundingApplicationComponents/FundingApplicationHeader";

const CrowdFundingApplicationPage = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <FundingApplicationHeader />
    </View>
  );
};

export default CrowdFundingApplicationPage;
