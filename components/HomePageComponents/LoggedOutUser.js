import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoggedOutUser = ({ navigation }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.headerText}>Create an Account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputField, { flex: 2 }]}
          placeholder='Enter your email address'
          placeholderTextColor='#c0c4c4'
        />
        <TouchableOpacity
          style={[styles.button, { flex: 1 }]}
          onPress={() => {
            navigation.navigate('CreateAccountPage');
          }}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginPage');
        }}>
        <Text style={[styles.loginText, { fontSize: 12 }]}>
          Already have an account?{' '}
          <Text style={styles.boldText}>Login here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'start',
    padding: 24,
    backgroundColor: '#0bbde2',
    borderRadius: 12,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 34,
    marginRight: 5,
    backgroundColor: '#fff',
    width: '70%',
  },
  button: {
    backgroundColor: '#10462e',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  loginText: {
    marginTop: 8,
    textAlign: 'left',
    color: '#fff',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default LoggedOutUser;
