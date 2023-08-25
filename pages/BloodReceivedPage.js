import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BloodReceivedPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={styles.title}>Asking for Blood</Text>
      <View style={styles.hr} />

      <View style={styles.patientContainer}>
        <View style={styles.patientInfo}>
          <Text style={styles.patientName}>Xabin Amded Mojumdar</Text>
          <Text style={styles.patientAge}>Age: 23</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card} />
        </View>
      </View>

      <View style={styles.bloodReasonPriority}>
        <Text style={styles.priority}>
          Priority: <Text style={styles.priorityTime}>Now</Text>
        </Text>
        <Text style={styles.reason}>
          Reason for needing blood:{" "}
          <Text style={styles.reasonDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            unde magni minima ullam voluptatibus dolorem error? Voluptates, ex?
            Error, dignissimos?
          </Text>
        </Text>
      </View>

      <View style={styles.bloodRequirementContainer}>
        <Text style={styles.bloodGroupContainer}>
          Blood Group: <Text style={styles.bloodGroup}>B+ (Positive)</Text>
        </Text>
        <Text style={styles.requirement}>Requrement: 2 Bags</Text>
        <Text style={styles.location}>Location: Dhaka, Bangladesh</Text>
      </View>

      <View style={styles.hospitalInfo}>
        <Text style={styles.hospitalName}>Square Hospital Bangladesh</Text>
        <Text style={styles.hospitalLocation}>
          Road 18, Plot 81, Bashundhara Residential Area, Dhaka-1229
        </Text>
        <Text style={styles.googleMapLocation}>View on Google Maps</Text>
      </View>

      <View style={styles.contactContainer}>
        <View style={styles.cardLeft}>
          <Image
            source={require("../images/interface-user-single.png")}
            style={styles.cardImage}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardContact}>
              Contact Name: <Text style={styles.cardName}>Intesar Hasan</Text>
            </Text>
            <Text style={styles.cardMobile}>
              Mobile No:{" "}
              <Text style={styles.cardMobileNumber}>01883672547</Text>
            </Text>
            <Text style={styles.cardEmail}>
              Email:{" "}
              <Text style={styles.cardEmailAddress}>intesat891@gmail.com</Text>
            </Text>
          </View>
        </View>
        <View style={styles.cardDivider} />
        <View style={styles.cardRight}>
          <Image
            source={require("../images/interface-calendar.png")}
            style={styles.cardImage}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardPriority}>
              Priority: <Text style={styles.cardTime}>Now</Text>
            </Text>
            <Text style={styles.cardDate}>
              Date when needed:{" "}
              <Text style={styles.cardExactDate}>23 Jan, 2023</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 16,
  },
  patientContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  patientInfo: {
    flex: 1,
    width: "50%",
    justifyContent: "center",
    alignItems: "start",
  },
  patientName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  patientAge: {
    fontSize: 16,
  },
  cardContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 140,
    width: 140,
    borderRadius: 12,
    backgroundColor: "black",
  },
  bloodReasonPriority: {
    marginVertical: 16,
  },
  priority: {
    fontWeight: "bold",
  },
  priorityTime: {
    color: "#f10216",
  },
  reason: {
    fontSize: 13,
    fontWeight: "bold",
  },
  reasonDescription: {
    fontWeight: "normal",
  },
  bloodGroupContainer: {
    fontWeight: "bold",
  },
  bloodGroup: {
    color: "#f10216",
  },
  requirement: {
    fontWeight: "bold",
  },
  location: {
    fontWeight: "bold",
  },
  hospitalInfo: {
    marginVertical: 16,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  hospitalLocation: {
    fontSize: 12,
  },
  googleMapLocation: {
    fontSize: 12,
    color: "#3f96c7",
    textDecorationLine: "underline",
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
  },
  cardLeft: {
    flex: 1,
    padding: 4,
    alignItems: "flex-start",
  },
  cardRight: {
    flex: 1,
    padding: 4,
    alignItems: "flex-start",
  },
  cardImage: {
    width: 16,
    height: 16,
    resizeMode: "cover",
  },
  cardDivider: {
    marginHorizontal: 8,
    width: 1,
    backgroundColor: "black",
    height: "100%",
  },
  cardText: {
    marginVertical: 8,
  },
  cardContact: {
    fontWeight: "bold",
    fontSize: 13,
  },
  cardName: {
    fontWeight: "normal",
    fontSize: 13,
  },
  cardMobile: {
    fontWeight: "bold",
    fontSize: 13,
  },
  cardMobileNumber: {
    fontWeight: "normal",
    fontSize: 13,
    color: "#71a9d0",
  },
  cardEmail: {
    fontWeight: "bold",
    fontSize: 13,
  },
  cardEmailAddress: {
    fontWeight: "normal",
    fontSize: 13,
    color: "#71a9d0",
  },
  cardPriority: {
    fontWeight: "bold",
    fontSize: 13,
  },
  cardTime: {
    fontWeight: "normal",
    fontSize: 13,
  },
  cardDate: {
    fontWeight: "bold",
    fontSize: 13,
  },
  cardExactDate: {
    fontWeight: "normal",
    fontSize: 13,
  },
});

export default BloodReceivedPage;
