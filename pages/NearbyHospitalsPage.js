import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

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

const NearbyHospitalsPage = () => {
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
        <Text style={styles.text}>Nearby Hospitals</Text>
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

export default NearbyHospitalsPage;
