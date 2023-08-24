import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CrowdFundingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Crowdfunding</Text>
        <Text style={styles.text}>operations</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageCardContainer}>
          <View style={styles.imageCard}>
            <Image
              source={require("../images/fund.png")}
              style={styles.image}
              resizeMode="center"
            />
          </View>
          <Text style={styles.cardLabel}>Raise Fund</Text>
        </View>
        <View style={styles.imageCardContainer}>
          <View style={[styles.imageCard, { backgroundColor: "#f8fdff" }]}>
            <Image
              source={require("../images/patient.png")}
              style={styles.image}
              resizeMode="center"
            />
          </View>
          <Text style={styles.cardLabel}>Fund Someone</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 10,
    marginRight: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  imageCardContainer: {
    alignItems: "center",
  },
  imageCard: {
    width: 100,
    height: 40,
    borderRadius: 10,
    padding: 35,
    borderWidth: 1,
    borderColor: "#d4d4d6",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  cardLabel: {
    textAlign: "center",
    marginTop: 6,
    fontSize: 12,
  },
});

export default CrowdFundingComponent;
