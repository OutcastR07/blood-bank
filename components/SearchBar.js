import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/interface-search-circle.png")}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search hospitals, doctors and more"
        placeholderTextColor="#c5c5c5"
      />
      <TouchableOpacity style={styles.nearbyContainer}>
        <Image
          source={require("../images/travel-map-location-pin.png")}
          style={styles.locationIcon}
        />
        <Text style={styles.nearbyText}>Nearby</Text>
        <Image
          source={require("../images/interface-arrows-button-down.png")}
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efeeef",
    borderRadius: 32,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 16,
  },
  searchIcon: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 10,
    color: "#888",
  },
  nearbyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
    marginVertical: 4,
  },
  locationIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  dropdownIcon: {
    width: 9,
    height: 9,
    marginRight: 2,
  },
  nearbyText: {
    fontSize: 13,
    color: "#333",
    marginRight: 8,
  },
});

export default SearchBar;
