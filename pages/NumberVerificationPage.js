import React, { useRef, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const NumberVerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const inputRefs = useRef([]);

  const handleVerificationCodeChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      <View style={styles.header}>
        <Text style={styles.text}>Verify your number</Text>
      </View>

      <View style={styles.hr} />

      <View style={styles.commandContainer}>
        <Text style={styles.command}>
          A 6 digit verification code has been sent to your number.{' '}
          <Text style={styles.commandOption}>Use a different number</Text>
        </Text>
      </View>

      <View style={styles.cardContainer}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <TextInput
            key={index}
            style={styles.card}
            value={verificationCode[index]}
            onChangeText={(value) => handleVerificationCodeChange(index, value)}
            maxLength={1}
            keyboardType='numeric'
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>

      <View style={styles.codeResendContainer}>
        <Text style={styles.codeResendText}>Resend code</Text>
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
  header: {
    marginBottom: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  hr: {
    borderBottomColor: '#d0d0d1',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 8,
  },
  command: {
    fontSize: 12,
  },
  commandOption: {
    color: '#4a6997',
    textDecorationLine: 'underline',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderColor: '#c5c4c5',
    borderWidth: 1,
    textAlign: 'center',
  },
  codeResendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 12,
  },
  codeResendText: {
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

export default NumberVerificationPage;
