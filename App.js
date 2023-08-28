import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './pages/LoginPage';
import Services from './pages/Services';
import HomeNavigation from './navigation/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
