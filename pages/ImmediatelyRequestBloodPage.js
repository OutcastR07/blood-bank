import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ImmediatelyRequestBodyPage = () => {
  const [activeBloodGroup, setActiveBloodGroup] = useState(null);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={styles.title}>Request blood immediately</Text>
      <Text style={styles.subtitle}>Patient Information</Text>

      <View style={styles.patientInfoContainer}>
        <TextInput
          style={styles.patientInput}
          placeholder="Name..."
          placeholderTextColor="#777"
        />
        <TouchableOpacity style={styles.selectAgeButton}>
          <Text style={styles.selectAgeText}>Select Age</Text>
          <Image
            source={require("../images/interface-arrows-button-down.png")}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.addPictureButton}>
        <Text style={styles.addPicture}>Add Pictures</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Reasoning for needing blood..."
          placeholderTextColor="#777"
        />
      </View>

      <View style={styles.addBloodGroupButton}>
        <Text style={styles.addBloodGroup}>Blood Group</Text>
      </View>

      <View style={styles.bloodGroupContainer}>
        {["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"].map((bloodType) => (
          <View
            key={bloodType}
            style={[
              styles.bloodGroupCard,
              activeBloodGroup === bloodType && styles.activeBloodGroupCard,
            ]}
            onTouchEnd={() => setActiveBloodGroup(bloodType)}
          >
            <Text
              style={[
                styles.bloodGroup,
                activeBloodGroup === bloodType
                  ? styles.activeBloodGroupText
                  : styles.inactiveBloodGroupText,
              ]}
            >
              {bloodType}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Number of bags required..."
          placeholderTextColor="#777"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#777"
        />
      </View>

      <View style={styles.contactDetailsContainer}>
        <Text style={styles.contactDetailsText}>Contact Details</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contact name..."
            placeholderTextColor="#777"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number..."
            placeholderTextColor="#777"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.submitRequestButton}>
        <Text style={styles.submitRequestText}>Request</Text>
      </TouchableOpacity>
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
  patientInput: {
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
    marginBottom: 10,
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderColor: "#c5c4c5",
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    width: "75%",
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
  addBloodGroupButton: {
    alignItems: "center",
    borderColor: "black",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "black",
    width: "26%",
  },
  addBloodGroup: { color: "white", fontSize: 12 },
  bloodGroupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 12,
  },
  bloodGroupCard: {
    borderColor: "#e7e6e6",
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 10,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  bloodGroup: {
    fontSize: 12,
  },
  activeBloodGroupCard: {
    backgroundColor: "#2881b9",
  },
  activeBloodGroupText: {
    color: "white",
  },
  inactiveBloodGroupText: {
    color: "black",
  },
  contactDetailsContainer: {
    marginVertical: 4,
  },
  contactDetailsText: {
    fontSize: 16,
    marginBottom: 4,
  },
  submitRequestButton: {
    alignItems: "center",
    borderRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: "#11462f",
    width: "100%",
    marginTop: 16,
    marginBottom: 16,
  },
  submitRequestText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ImmediatelyRequestBodyPage;
