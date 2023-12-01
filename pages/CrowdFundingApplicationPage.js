import React from "react";
import { ScrollView, StatusBar, View } from "react-native";
import FundingApplicationBody from "../components/FundingApplicationComponents/FundingApplicationBody";

const CrowdFundingApplicationPage = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <FundingApplicationBody navigation={navigation}/>
      </View>
    </ScrollView>
  );
};

export default CrowdFundingApplicationPage;
