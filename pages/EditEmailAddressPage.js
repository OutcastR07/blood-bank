import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const EditEmailAddressPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Text style={styles.title}>Edit email address</Text>

      <View style={styles.hr} />

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Email</Text>
        <Text style={styles.subtitleSuggestion}>
          Enter your personal email address to keep up to date.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.enterText}>Enter email address</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.confirmationText}>
          An email has been sent to this address. Click on the link to verify
          the email address.
        </Text>
      </View>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  hr: {
    borderBottomColor: '#d0d0d1',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 16,
  },
  subtitleContainer: {
    marginBottom: 16,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitleSuggestion: {
    fontSize: 14,
    fontWeight: '300',
  },
  inputContainer: {
    marginVertical: 16,
  },
  enterText: {
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e7e6e6',
    marginVertical: 8,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  confirmationText: {
    fontSize: 12,
  },
  verifyButton: {
    alignItems: 'center',
    borderRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: '#11462f',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
  },
  verifyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
});

export default EditEmailAddressPage;
