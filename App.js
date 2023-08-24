import React from "react";
import { StyleSheet, View } from "react-native";
import CrowdFundingApplicationPage from "./pages/CrowdFundingApplicationPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage /> */}
      {/* <AccountInfoPage /> */}
      {/* <AccountPage /> */}
      <CrowdFundingApplicationPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
