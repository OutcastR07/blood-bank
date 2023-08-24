import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import CrowdfundingComponent from "../components/HomePageComponents/CrowdFundingComponent";
import JumpIntoServices from "../components/HomePageComponents/JumpIntoServices";
import LocationComponent from "../components/HomePageComponents/LocationComponent";
import LoggedInUser from "../components/HomePageComponents/LoggedInUser";
import LoggedOutUser from "../components/HomePageComponents/LoggedOutUser";
import NearbyHospitals from "../components/HomePageComponents/NearbyHospitals";
import SearchBar from "../components/HomePageComponents/SearchBar";
import WaysToUseBloodBank from "../components/HomePageComponents/WaysToUseBloodBank";

const HomePage = () => {
  const [isLocationEnabled, setLocationEnabled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLocationEnabled = () => {
      const isEnabled = true;
      setLocationEnabled(isEnabled);
    };

    checkLocationEnabled();
  }, []);

  useEffect(() => {
    const userAuthenticated = false;
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
