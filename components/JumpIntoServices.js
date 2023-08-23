import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const JumpIntoServices = () => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.header}>
        <Text style={styles.jumpText}>Jump into services</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <CardItem
          title="Doctors"
          imageSource={require("../images/doctor.png")}
        />
        <CardItem
          title="Hospitals"
          imageSource={require("../images/hospital.png")}
        />
        <CardItem
          title="Blood Banks"
          imageSource={require("../images/blood-bag.png")}
        />
        <CardItem
          title="Diagnostic Centers"
          imageSource={require("../images/diagnostic-center.png")}
        />
      </View>
    </View>
  );
};

const CardItem = ({ title, imageSource }) => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.imageItem}>
        <Image
          source={imageSource}
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#fff",
    marginBottom: 12,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jumpText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 12,
    color: "#b2b2b2",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardItem: {
    flex: 1,
    alignItems: "center",
    paddingTop: 12,
  },
  imageItem: {
    backgroundColor: "#efeeef",
    width: 70,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 45,
    height: 45,
    margin: 4,
  },
  cardTitle: {
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
  },
});

export default JumpIntoServices;
