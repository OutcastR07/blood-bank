import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Text style={styles.title}>Login</Text>

      <View style={styles.hr} />

      <View style={styles.inputContainer}>
        <Text style={styles.enterText}>Enter your phone number</Text>
        <View style={styles.phoneNumberInputContainer}>
          <TextInput style={styles.countryCodeInput} value={'+880'}></TextInput>
          <TextInput style={styles.phoneNumberInput}></TextInput>
        </View>
      </View>

      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => {
          navigation.navigate('RequestVerificationCode');
        }}>
        <Text style={styles.updateText}>Request Verification Code</Text>
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
  inputContainer: {
    marginVertical: 16,
  },
  enterText: {
    fontWeight: '500',
    fontSize: 16,
  },
  phoneNumberInputContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  countryCodeInput: {
    borderWidth: 1,
    borderColor: '#e7e6e6',
    width: '20%',
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
  },
  phoneNumberInput: {
    borderWidth: 1,
    borderColor: '#e7e6e6',
    width: '70%',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e7e6e6',
    marginVertical: 8,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  updateButton: {
    alignItems: 'center',
    borderRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: '#11462f',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
  },
  updateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
  },
});

export default LoginPage;
