import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AccountBody = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 40,
    marginBottom: 40,
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
});

export default AccountBody;
