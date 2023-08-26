import React from "react";
import { StyleSheet, View } from "react-native";
import NumberVerificationPage from "./pages/NumberVerificationPage";

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
      {/* <Messages /> */}
      {/* <ImmediatelyRequestBodyPage /> */}
      {/* <BloodBanksPage /> */}
      {/* <ContactRequestPage /> */}
      {/* <FundSomeonePage /> */}
      <NumberVerificationPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
