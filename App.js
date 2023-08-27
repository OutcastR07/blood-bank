import React from "react";
import { StyleSheet, View } from "react-native";
import NotificationPage from "./pages/Notification";

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
      {/* <DentalCentersPage /> */}
      {/* <DiagnosticCentersPage /> */}
      {/* <DiagnosticCenterDetailStyle /> */}
      {/* <HospitalsPage /> */}
      {/* <NearbyHospitalsPage /> */}
      {/* <RequestBodyPage /> */}
      {/* <EditEmailAddressPage /> */}
      {/* <EditNamePage /> */}
      {/* <EditPhoneNumberPage />*/}
      {/* <Services /> */}
      <NotificationPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
