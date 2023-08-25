import React from "react";
import { ScrollView, StatusBar, View } from "react-native";
import FundingApplicationBody from "../components/FundingApplicationComponents/FundingApplicationBody";
import FundingApplicationHeader from "../components/FundingApplicationComponents/FundingApplicationHeader";

const CrowdFundingApplicationPage = () => {
  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <FundingApplicationHeader />
        <FundingApplicationBody />
      </View>
    </ScrollView>
  );
};

export default CrowdFundingApplicationPage;
