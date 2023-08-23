import React from "react";
import { StatusBar, StyleSheet, View } from "react-native"; // Import SafeAreaView
import LocationComponent from "../components/LocationComponent";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"darkgreen"} />
      <LocationComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomePage;
