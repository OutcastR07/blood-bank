import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ContactRequestPage = () => {
  const [activeButton, setActiveButton] = useState("Pending");
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <Text style={styles.text}>Contact Request</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "Pending" && styles.activeButton,
          ]}
          onPress={() => setActiveButton("Pending")}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === "Pending" && styles.activeButtonText,
            ]}
          >
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "Approval" && styles.activeButton,
          ]}
          onPress={() => setActiveButton("Approval")}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === "Approval" && styles.activeButtonText,
            ]}
          >
            Approval
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactCard}>
        <View style={styles.cardImage}></View>

        <View style={styles.cardText}>
          <Text style={styles.name}>Xabin</Text>
          <Text style={styles.hospital}>Square Hospital Bangladesh</Text>
          <Text style={styles.bloodGroup}>Required: B+ (2 Bags)</Text>
        </View>
      </View>
      <View style={styles.contactCard}>
        <View style={styles.cardImage}></View>

        <View style={styles.cardText}>
          <Text style={styles.name}>Xabin</Text>
          <Text style={styles.hospital}>Square Hospital Bangladesh</Text>
          <Text style={styles.bloodGroup}>Required: B+ (2 Bags)</Text>
        </View>
      </View>
      <View style={styles.contactCard}>
        <View style={styles.cardImage}></View>

        <View style={styles.cardText}>
          <Text style={styles.name}>Xabin</Text>
          <Text style={styles.hospital}>Square Hospital Bangladesh</Text>
          <Text style={styles.bloodGroup}>Required: B+ (2 Bags)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#eff9fe",
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#dae0e3",
  },
  activeButton: {
    backgroundColor: "#2881b9",
    borderColor: "#2881b9",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  activeButtonText: {
    color: "white",
  },
  contactCard: {
    borderWidth: 1,
    borderColor: "#e1e0e1",
    width: "100%",
    padding: 6,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 4,
  },
  cardImage: {
    backgroundColor: "black",
    width: 70,
    height: "100%",
    borderRadius: 5,
  },
  cardText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  hospital: {
    marginBottom: 6,
  },
  bloodGroup: {
    color: "#f66588",
  },
});

export default ContactRequestPage;
