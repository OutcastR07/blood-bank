import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BloodBanksPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <Text style={styles.text}>Blood banks</Text>

        <TouchableOpacity style={styles.selectAreaButton}>
          <Image
            source={require("../images/travel-map-earth-2.png")}
            style={styles.earthImage}
          />
          <Text style={styles.selectAreaText}>Select Area</Text>
          <Image
            source={require("../images/interface-arrows-button-down.png")}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
        <View style={styles.eachCard}>
          <View style={styles.card}></View>
          <Text style={styles.cardText}>X Hospital</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  selectAreaButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  selectAreaText: {
    marginHorizontal: 6,
    fontSize: 10,
  },
  earthImage: {
    width: 14,
    height: 14,
  },
  dropdownIcon: {
    width: 13,
    height: 13,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 16,
  },
  eachCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "black",
  },
});

export default BloodBanksPage;
