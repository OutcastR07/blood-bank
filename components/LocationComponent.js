import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LocationComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../images/travel-map-earth-2 (1).png")}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Location sharing disabled. Tap here to access more features
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enable</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#10472f",
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
    marginLeft: 12,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: "#fff",
  },
  button: {
    backgroundColor: "#10472f",
    paddingHorizontal: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default LocationComponent;
