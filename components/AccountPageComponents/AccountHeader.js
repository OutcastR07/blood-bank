import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AccountHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.accountInfo}>
        <Text style={styles.name}>Xabina Khairun Nissa</Text>
        <Text style={styles.address}>Mohakhali DOHS, Dhaka</Text>
        <Text style={styles.age}>
          Age: <Text style={styles.info}>25</Text>
        </Text>
        <Text style={styles.lastDonation}>
          Last donated blood: <Text style={styles.info}>3 Months ago</Text>
        </Text>
      </View>
      <View style={styles.circularImageContainer}>
        <View style={styles.circularImage}>
          <Image
            source={require("../../images/interface-user-single-male.png")}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 24,
  },
  accountInfo: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  address: {
    fontSize: 12,
    marginTop: 4,
  },
  age: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 8,
  },
  lastDonation: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 4,
  },
  info: {
    fontWeight: "normal",
  },
  circularImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  circularImage: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});

export default AccountHeader;
