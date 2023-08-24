import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WaysToUseBloodBank = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        <Text style={styles.bold}>Ways to use Blood bank</Text>
      </Text>
      <Image
        source={require("../images/Bloodbank-Bg.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require("../images/Blood-bank-bg-picture.png")}
        style={styles.overlayImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 12,
    position: "relative",
  },
  boldText: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 100,
    marginTop: 10,
  },
  overlayImage: {
    position: "absolute",
    left: -3,
    bottom: 0.4,
    width: "60%",
    height: 99,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    overflow: "hidden",
  },
});

export default WaysToUseBloodBank;
