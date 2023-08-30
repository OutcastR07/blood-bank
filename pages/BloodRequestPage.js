import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const BloodRequestPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
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
          Reason for needing blood:{' '}
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start a Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('BloodReceivedPage');
          }}>
          <Text style={styles.buttonText}>Request Contact</Text>
        </TouchableOpacity>
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
    fontWeight: 'bold',
    marginBottom: 8,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 16,
  },
  patientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientInfo: {
    flex: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'start',
  },
  patientName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  patientAge: {
    fontSize: 16,
  },
  cardContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 140,
    width: 140,
    borderRadius: 12,
    backgroundColor: 'black',
  },
  bloodReasonPriority: {
    marginVertical: 16,
  },
  priority: {
    fontWeight: 'bold',
  },
  priorityTime: {
    color: '#f10216',
  },
  reason: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  reasonDescription: {
    fontWeight: 'normal',
  },
  bloodGroupContainer: {
    fontWeight: 'bold',
  },
  bloodGroup: {
    color: '#f10216',
  },
  requirement: {
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'bold',
  },
  hospitalInfo: {
    marginVertical: 16,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hospitalLocation: {
    fontSize: 12,
  },
  googleMapLocation: {
    fontSize: 12,
    color: '#3f96c7',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 32,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: '#3499da',
    width: 130,
    height: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default BloodRequestPage;
