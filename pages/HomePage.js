import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import CrowdfundingComponent from "../components/CrowdFundingComponent";
import JumpIntoServices from "../components/JumpIntoServices";
import LocationComponent from "../components/LocationComponent";
import LoggedInUser from "../components/LoggedInUser";
import LoggedOutUser from "../components/LoggedOutUser";
import NearbyHospitals from "../components/NearbyHospitals";
import SearchBar from "../components/SearchBar";
import WaysToUseBloodBank from "../components/WaysToUseBloodBank";

const HomePage = () => {
  const [isLocationEnabled, setLocationEnabled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLocationEnabled = () => {
      const isEnabled = false;
      setLocationEnabled(isEnabled);
    };

    checkLocationEnabled();
  }, []);

  useEffect(() => {
    const userAuthenticated = true;
    setIsLoggedIn(userAuthenticated);
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

        {/* Conditionally render based on user authentication */}
        {isLoggedIn ? <LoggedInUser /> : <LoggedOutUser />}

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
