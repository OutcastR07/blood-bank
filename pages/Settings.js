import React, { useContext } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ContextStore from '../Context/ContextStore';

const Settings = ({ navigation }) => {
  const {contextStore, setContextStore} = useContext(ContextStore)
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountInfoPage');
        }}
        style={styles.userCard}>
        <View style={styles.circularImageContainer}>
          <Image
            source={{uri: contextStore.user.imgUri}}
            style={styles.mainImage}
          />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{contextStore.user.name}</Text>
          <Text style={styles.userNumber}>+880 {contextStore.user.phoneNumber}</Text>
          <Text style={styles.userEmail}>{contextStore.user.email}</Text>
        </View>

        <View style={styles.nextIcon}>
          <Image
            source={require('../images/arrow-forward-ios.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailVerificationCardContainer}>
        <View style={styles.warningeImageContainer}>
          <Image
            source={require('../images/warning.png')}
            style={styles.warningImage}
          />
        </View>
        <View style={styles.emailVerificationText}>
          <Text style={styles.emailAddressVerificationWarning}>
            Verify your email address
          </Text>
          <Text style={styles.emailAddressVerificationReason}>
            For increased security
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 14,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circularImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  mainImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'cover',
  },
  userName: {
    fontSize: 16,
  },
  userNumber: {
    fontSize: 12,
    fontWeight: '300',
  },
  userEmail: {
    fontSize: 12,
    fontWeight: '300',
  },
  nextIcon: {
    marginLeft: 50,
  },
  icon: {
    width: 20,
    height: 20,
  },
  emailVerificationCardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fffeef',
    marginTop: 32,
    width: '100%',
    paddingLeft: 28,
    paddingVertical: 16,
    borderRadius: 10,
    elevation: 3,
  },
  warningeImageContainer: {
    marginRight: 12,
  },
  warningImage: {
    width: 40,
    height: 40,
  },
  emailAddressVerificationWarning: {
    fontWeight: '500',
  },
  emailAddressVerificationReason: {
    fontWeight: '300',
    fontSize: 12,
  },
});

export default Settings;
