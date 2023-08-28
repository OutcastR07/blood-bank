import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NotificationPage = () => {
  return (
    <View>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />

        <View style={styles.header}>
          <Text style={styles.text}>Notification</Text>

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.notificationCardContainer}>
        <View style={styles.notificationUnreadCard}>
          <View style={styles.unreadCircle} />
          <View style={styles.notificationInfoContainer}>
            <View style={styles.notificationInfoText}>
              <Text style={styles.name}>Xabin</Text>
              <Text style={styles.hospital}>Square Hospital Bangladesh</Text>
            </View>
            <View style={styles.responseContainer}>
              <Text style={styles.response}>Approved contact request</Text>
            </View>
          </View>
        </View>

        <View style={styles.notificationUnreadCard}>
          <View style={styles.unreadCircle} />
          <View style={styles.notificationInfoContainer}>
            <View style={styles.notificationInfoText}>
              <Text style={styles.name}>Xabin</Text>
              <Text style={styles.hospital}>Square Hospital Bangladesh</Text>
            </View>
            <View style={styles.responseContainer}>
              <Text style={styles.response}>Approved contact request</Text>
            </View>
          </View>
        </View>

        <View style={styles.notificationReadCard}>
          <View style={styles.unReadCircle} />
          <View style={styles.notificationInfoContainer}>
            <View style={styles.notificationInfoText}>
              <Text style={styles.name}>Xabin</Text>
              <Text style={styles.hospital}>Square Hospital Bangladesh</Text>
            </View>
            <View style={styles.responseContainer}>
              <Text style={styles.response}>Approved contact request</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  clearButtonText: {
    fontWeight: "300",
    fontSize: 12,
    color: "#2596be",
  },
  notificationCardContainer: {
    marginVertical: 32,
  },
  notificationUnreadCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f6f6f7",
  },
  notificationReadCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  unreadCircle: {
    width: 8,
    height: 8,
    backgroundColor: "#3499da",
    borderRadius: 4,
    marginRight: 10,
  },
  unReadCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  notificationInfoContainer: {
    flex: 1,
  },
  notificationInfoText: {
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  hospital: {
    fontSize: 15,
    fontWeight: "400",
  },
  response: {
    color: "#f56f92",
    fontWeight: "500",
    fontSize: 12,
  },
});

export default NotificationPage;
