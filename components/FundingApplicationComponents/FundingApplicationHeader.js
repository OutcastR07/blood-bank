import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FundingApplicationHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for crowdfunding</Text>
      <Text style={styles.subtitle}>Patient Information</Text>

      <View style={styles.patientInfoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name..."
          placeholderTextColor="#777"
        />
        <TouchableOpacity style={styles.selectAgeButton}>
          <Text style={styles.selectAgeText}>Select Age</Text>
          <Image
            source={require("../../images/interface-arrows-button-down.png")}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addPictureButton}>
        <Text style={styles.addPicture}>Add Pictures</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
  },
  patientInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    alignItems: "center",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginRight: 8,
    fontSize: 10,
  },
  selectAgeButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  selectAgeText: {
    marginRight: 6,
    fontSize: 10,
  },
  dropdownIcon: {
    width: 13,
    height: 13,
  },
  addPictureButton: {
    alignItems: "center",
    borderColor: "black",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "black",
    width: "27%",
  },
  addPicture: {
    color: "white",
    fontSize: 12,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderColor: "#c5c4c5",
    borderWidth: 1,
  },
});

export default FundingApplicationHeader;
