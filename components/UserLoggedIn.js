import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserLoggedIn = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContent}>
        <Text style={styles.greeting}>
          Hi Xu! Tell us how Rantzon can make your life easier
        </Text>
        <Text style={styles.secondaryText}>Text to share with us.</Text>
        <View style={styles.availableContainer}>
          <Text style={styles.availableText}>We are available</Text>
          <Image
            source={require("../images/interface-arrows-right-white.png")}
            style={styles.arrowIcon}
          />
        </View>
      </View>
      <View style={styles.circle}>
        {/* You can add content inside the circle, like an icon */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#0bbde2",
    borderRadius: 12,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  leftContent: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  secondaryText: {
    fontSize: 12,
    color: "white",
  },
  availableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  availableText: {
    fontSize: 12,
    marginRight: 4,
    color: "white",
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  circle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "#f0c50f",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserLoggedIn;
