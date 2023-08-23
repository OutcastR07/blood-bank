import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import JumpIntoServices from "../components/JumpIntoServices";
import LocationComponent from "../components/LocationComponent";
import SearchBar from "../components/SearchBar";
import WelcomeUser from "../components/WelcomeUser";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#10472f"} />
      <LocationComponent />
      <SearchBar />
      <WelcomeUser />
      <JumpIntoServices />
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
