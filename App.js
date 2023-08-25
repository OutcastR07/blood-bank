import React from "react";
import { StyleSheet, View } from "react-native";
import FundAskingPage from "./pages/FundAskingPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AccountPage /> */}
      {/* <AccountInfoPage /> */}
      {/* <HomePage /> */}
      {/* <HospitalDetailPage /> */}
      {/* <DiagnosticCenterDetailPage /> */}
      {/* <CrowdFundingApplicationPage /> */}
      {/* <BloodRequestPage /> */}
      {/* <BloodReceivedPage /> */}
      <FundAskingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
