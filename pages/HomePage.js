import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import CrowdfundingComponent from "../components/CrowdFundingComponent";
import JumpIntoServices from "../components/JumpIntoServices";
import LocationComponent from "../components/LocationComponent";
import NearbyHospitals from "../components/NearbyHospitals";
import SearchBar from "../components/SearchBar";
import UserLoggedIn from "../components/UserLoggedIn";
import WaysToUseBloodBank from "../components/WaysToUseBloodBank";

const HomePage = () => {
  const [isLocationEnabled, setLocationEnabled] = useState(false);

  useEffect(() => {
    const checkLocationEnabled = () => {
      const isEnabled = false;
      setLocationEnabled(isEnabled);
    };

    checkLocationEnabled();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={isLocationEnabled ? "black" : "#10472f"}
        />
        {!isLocationEnabled && <LocationComponent />}
        <SearchBar />
        <UserLoggedIn />
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
