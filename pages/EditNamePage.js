import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const EditNamePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Text style={styles.title}>Edit Name</Text>

      <View style={styles.hr} />

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Name</Text>
        <Text style={styles.subtitleSuggestion}>
          This is the name other users in Rantzon and Rantzon Support will see.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.enterText}>Full Name</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
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
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
});

export default EditNamePage;
