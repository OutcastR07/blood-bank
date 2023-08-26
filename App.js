import React from "react";
import { StyleSheet, View } from "react-native";
import DentalCentersPage from "./pages/DentalCentersPage";

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
      {/* <NumberVerificationPage /> */}
      <DentalCentersPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
