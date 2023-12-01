import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ContextStore from "../../Context/ContextStore";
import { TouchableOpacity } from "react-native-gesture-handler";

const AccountInfoHeader = () => {
  const {contextStore, setContextStore} = useContext(ContextStore)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Info</Text>
      <View style={styles.hr} />
      <View style={styles.circularImageContainer}>
        <View style={styles.circularImage}>
          <Image
            source={{uri: contextStore.user.imgUri}}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.smallImageContainer}>
          <TouchableOpacity>
          <View style={styles.smallImageWrapper}>
            <Image
              source={require("../../images/edit.png")}
              style={styles.smallImage}
            />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 16,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccd",
    width: "100%",
    marginTop: 8,
    marginBottom: 16,
  },
  circularImageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circularImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  mainImage: {
    width: "60%",
    height: "60%",
    resizeMode: "cover",
  },
  smallImageContainer: {
    position: "absolute",
    bottom: 0,
    left: 55,
  },
  smallImageWrapper: {
    width: 22,
    height: 22,
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  smallImage: {
    width: "70%",
    height: "70%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default AccountInfoHeader;
