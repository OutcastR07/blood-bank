import React from 'react';
import { StyleSheet, View } from 'react-native';
import CrowdFundingApplicationPage from './pages/CrowdFundingApplicationPage';
import HomePage from './pages/HomePage';
import HomeNavigation from './navigation/navigation';
import HospitalDetailPage from './pages/HospitalPage';
import DiagnosticCenterDetailPage from './pages/DiagnosticCenter';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HospitalDetailPage /> */}
      <DiagnosticCenterDetailPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
