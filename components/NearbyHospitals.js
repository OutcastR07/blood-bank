import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NearbyHospitals = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.leftText}>Nearby Hospitals</Text>
        <TouchableOpacity>
          <Text style={styles.rightText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          <HospitalCard name="Hospital 1" />
          <HospitalCard name="Hospital 2" />
          <HospitalCard name="Hospital 3" />
          <HospitalCard name="Hospital 4" />
        </View>
        <View style={styles.row}>
          <HospitalCard name="Hospital 5" />
          <HospitalCard name="Hospital 6" />
          <HospitalCard name="Hospital 7" />
          <HospitalCard name="Hospital 8" />
        </View>
      </View>
    </View>
  );
};

const HospitalCard = ({ name, color }) => {
  return (
    <View style={styles.hospitalCardContainer}>
      <View style={[styles.card, { backgroundColor: "black" }]}>
        {/* Hospital card content */}
      </View>
      <Text style={styles.hospitalName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  leftText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightText: {
    fontSize: 12,
    color: "#434242",
  },
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  card: {
    width: 75,
    height: 75,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    padding: 8,
  },
  cardText: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  hospitalCardContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  hospitalName: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
});

export default NearbyHospitals;
