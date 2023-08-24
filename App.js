import React from "react";
import { StyleSheet, View } from "react-native";
import AccountPage from "./pages/AccountPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage /> */}
      {/* <AccountInfoPage /> */}
      <AccountPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
