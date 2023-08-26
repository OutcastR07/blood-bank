import React from 'react';
import { StyleSheet, View } from 'react-native';
import BloodBanksPage from './pages/BloodBanksPage';
import DoctorDetailPage from './pages/DoctorDetailPage';

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
      <DoctorDetailPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
