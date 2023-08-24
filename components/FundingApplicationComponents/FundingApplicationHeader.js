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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
  },
  patientInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
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
  },
  selectAgeButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  selectAgeText: {
    marginRight: 6,
  },
  dropdownIcon: {
    width: 14,
    height: 14,
  },
  addPictureButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "black",
    width: "30%",
  },
  addPicture: {
    color: "white",
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
