import React from 'react';
import { StyleSheet, View } from 'react-native';
import BloodRequestPage from './pages/BloodRequestPage';
import DoctorsPage from './pages/DoctorsPage';
import HomePage from './pages/HomePage';
import ListMessages from './pages/ListMessages';

export default function App() {
  return (
    <View style={styles.container}>
      <ListMessages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
