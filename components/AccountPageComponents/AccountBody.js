import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AccountBody = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../../images/contact-book.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Contact request</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../images/interface-favorite-star.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Starred</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../images/mail-send-email.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Messages</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../images/interface-alert-alarm-bell-2.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Notifications</Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.verticalSection}>
        <View style={styles.verticalItem}>
          <Image
            source={require("../../images/settings.png")}
            style={styles.verticalImage}
          />
          <Text style={styles.verticalText}>Settings</Text>
        </View>
        <View style={styles.verticalItem}>
          <Image
            source={require("../../images/information.png")}
            style={styles.verticalImage}
          />
          <Text style={styles.verticalText}>Legal</Text>
        </View>
        <View style={styles.verticalItem}>
          <Image
            source={require("../../images/exit.png")}
            style={styles.verticalImage}
          />
          <Text style={styles.verticalText}>Logout</Text>
        </View>
      </View>
      <Text style={styles.version}>v1.002</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 40,
  },
  card: {
    width: "23%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
    backgroundColor: "#eeefef",
  },
  cardImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 8,
    textAlign: "center",
  },
  hr: {
    borderBottomWidth: 6,
    borderBottomColor: "#eeefef",
    marginVertical: 20,
  },
  verticalSection: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  verticalItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  verticalImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  verticalText: {
    fontSize: 12,
  },
  version: {
    marginHorizontal: 16,
    marginTop: 10,
    fontSize: 10,
    fontWeight: "400",
  },
});

export default AccountBody;
