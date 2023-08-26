import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const bloodBankData = [
  "Hospital X",
  "Hospital X",
  "Hospital X",
  "Hospital X",
  "Hospital X",
  "Hospital X",
  "Hospital X",
  "Hospital X",
  "Hospital X",
];

const DiagnosticCentersPage = () => {
  const chunkedData = (data, size) => {
    const chunkedArr = [];
    for (let i = 0; i < data.length; i += size) {
      chunkedArr.push(data.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedBloodBankData = chunkedData(bloodBankData, 3);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <Text style={styles.text}>Diagnostic Centers</Text>

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

      {chunkedBloodBankData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.cardContainer}>
          {row.map((hospital, index) => (
            <View key={index} style={styles.eachCard}>
              <View style={styles.card}></View>
              <Text style={styles.cardText}>{hospital}</Text>
            </View>
          ))}
        </View>
      ))}
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
  cardText: {
    marginTop: 8,
  },
});

export default DiagnosticCentersPage;
