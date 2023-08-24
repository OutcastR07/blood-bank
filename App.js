import React from "react";
import { StyleSheet, View } from "react-native";
import AccountInfoPage from "./pages/AccountInfoPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage /> */}
      <AccountInfoPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
