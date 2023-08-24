import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import CrowdfundingComponent from "../components/CrowdFundingComponent";
import JumpIntoServices from "../components/JumpIntoServices";
import LocationComponent from "../components/LocationComponent";
import NearbyHospitals from "../components/NearbyHospitals";
import SearchBar from "../components/SearchBar";
import WaysToUseBloodBank from "../components/WaysToUseBloodBank";
import WelcomeUser from "../components/WelcomeUser";

const HomePage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={"#10472f"} />
        <LocationComponent />
        <SearchBar />
        <WelcomeUser />
        <JumpIntoServices />
        <NearbyHospitals />
        <CrowdfundingComponent />
        <WaysToUseBloodBank />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomePage;
