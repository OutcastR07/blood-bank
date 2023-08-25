import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FundingApplicationBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Details about disease..."
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <Text style={styles.wordCount}>Minimum 2000 words</Text>
      </View>

      {/* New input field - 100% width */}
      <TextInput
        style={styles.fullWidthInput}
        placeholder="Currently admitted at..."
        placeholderTextColor="grey"
      />

      {/* New input field - 50% width */}
      <TextInput
        style={styles.halfWidthInput}
        placeholder="Required Fund..."
        placeholderTextColor="grey"
      />

      {/* Add Paperworks button */}
      <TouchableOpacity style={styles.addPaperworksButton}>
        <Text style={styles.addPaperworksText}>Add Paperworks</Text>
      </TouchableOpacity>

      {/* Card Container */}
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>

      {/* Payment Options button */}
      <TouchableOpacity style={styles.paymentOptionsButton}>
        <Text style={styles.paymentOptionsText}>Payment Options</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>MFS Information</Text>

      <TextInput
        style={styles.halfWidthInput}
        placeholder="bKash Number"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.halfWidthInput}
        placeholder="Nagad Number"
        placeholderTextColor="grey"
      />

      <Text style={styles.subtitle}>Bank Information</Text>

      <TextInput
        style={styles.halfWidthInput}
        placeholder="Bank Name"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.halfWidthInput}
        placeholder="Branch Name"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.halfWidthInput}
        placeholder="Bank Account Number"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.halfWidthInput}
        placeholder="Bank Account Name"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.halfWidthInput}
        placeholder="Bank Account Phone Number"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.halfWidthInput}
        placeholder="Routing Number"
        placeholderTextColor="grey"
      />

      <TouchableOpacity style={styles.submitReviewButton}>
        <Text style={styles.submitReviewText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textAreaContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  textArea: {
    height: 80,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    fontSize: 10,
  },
  wordCount: {
    alignSelf: "flex-end",
    fontSize: 8,
    color: "#898988",
  },
  fullWidthInput: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginTop: 8,
    fontSize: 10,
  },
  halfWidthInput: {
    width: "50%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginTop: 8,
    fontSize: 10,
  },
  addPaperworksButton: {
    alignItems: "center",
    borderColor: "black",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "black",
    width: "32%",
    marginTop: 8,
  },
  addPaperworksText: {
    color: "white",
    fontSize: 12,
  },
  paymentOptionsButton: {
    alignItems: "center",
    borderColor: "black",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "black",
    width: "33%",
    marginTop: 8,
  },
  paymentOptionsText: {
    color: "white",
    fontSize: 12,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderColor: "#c5c4c5",
    borderWidth: 1,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
  },
  submitReviewButton: {
    alignItems: "center",
    borderRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: "#11462f",
    width: "100%",
    marginTop: 16,
    marginBottom: 16,
  },
  submitReviewText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FundingApplicationBody;
