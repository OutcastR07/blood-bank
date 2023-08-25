import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import * as Linking from 'expo-linking';
// import ContextStore from '../Context/ContextStore';
import { StyleSheet, Dimensions } from 'react-native';

const Item = ({ item }) => {
  return (
    <View style={DiagnosticCenterDetailStyle.serviceCard}>
      <Text style={{ textTransform: 'capitalize', fontSize: 12 }}>
        Saturday
      </Text>

      <Text style={DiagnosticCenterDetailStyle.greenText}>Open 24/7</Text>
    </View>
  );
};

const DiagnosticCenterDetailPage = ({ navigate, route }) => {
  //   const { contextStore, setContextStore } = useContext(ContextStore);
  //   const { id } = route.params;
  const [DiagnosticCenter, setDiagnosticCenter] = useState({
    serviceHours: [{ Sunday: 'Open 24/7' }],
    facilities: [
      'Smart Reception and Enquiry desk',
      'Emergency Service Center',
      'Patient addmission center for critical',
      'Beds for ndoor patient cabin, ward, suits.',
      'Modern diagnostic services facilities',
      'Internal Pharmacy for quality medicine',
    ],
    services: [
      'Smart Reception and Enquiry desk',
      'Emergency Service Center',
      'Patient addmission center for critical',
      'Beds for ndoor patient cabin, ward, suits.',
      'Modern diagnostic services facilities',
      'Internal Pharmacy for quality medicine',
    ],
    placeDetails: {},
  });
  //   useEffect(() => {
  //     (async () => {
  //       contextStore.setShowSpinner(true);
  //       const DiagnosticCenter = await dispatch(actions.getOneDiagnosticCenter, { id });
  //       contextStore.setShowSpinner(false);
  //       if (!DiagnosticCenter.error) {
  //         setDiagnosticCenter(DiagnosticCenter);
  //       }
  //     })();
  //   }, [id]);
  let itemData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <ScrollView>
        <View style={DiagnosticCenterDetailStyle.coverImage}>
          <Image
            style={{
              maxWidth: '100%',
              height: '100%',
              borderRadius: 4,
            }}
            source={{
              uri: `https://upload.wikimedia.org/wikipedia/commons/8/88/Hospital-de-Bellvitge.jpg`,
            }}></Image>
        </View>
        <View style={{ padding: 20, marginBottom: 40 }}>
          <Text style={DiagnosticCenterDetailStyle.DiagnosticCenterName}>
            Padma Diagnostic Center Bangladesh
          </Text>
          <View style={DiagnosticCenterDetailStyle.card}>
            <View style={DiagnosticCenterDetailStyle.card_section}>
              <Image
                style={DiagnosticCenterDetailStyle.icon}
                source={require('../images/mail-send-email.png')}
              />
              <Text style={DiagnosticCenterDetailStyle.card__description}>
                <Text>
                  Road 18, Plot 21, Bashundhara Residential Area, Dhaka-1229{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // Linking.openURL(DiagnosticCenter.placeDetails.url);
                  }}>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: '#3598db',
                    }}>
                    View on Google Map
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View style={DiagnosticCenterDetailStyle.card_section}>
              <Image
                style={DiagnosticCenterDetailStyle.icon}
                source={require('../images/mail-send-email.png')}
              />
              <Text style={DiagnosticCenterDetailStyle.card__description}>
                01914001234
              </Text>
            </View>
            <View style={DiagnosticCenterDetailStyle.card_section}>
              <Image
                style={DiagnosticCenterDetailStyle.icon}
                source={require('../images/mail-send-email.png')}
              />
              <Text style={DiagnosticCenterDetailStyle.card__description}>
                DiagnosticCenter@evercarebd.com
              </Text>
            </View>
          </View>
          <Text style={DiagnosticCenterDetailStyle.caption}>Service hours</Text>
          <View style={DiagnosticCenterDetailStyle.underline}></View>
          <Text style={DiagnosticCenterDetailStyle.greenText}>
            Open 24 hours
          </Text>
          <FlatList
            contentContainerStyle={DiagnosticCenterDetailStyle.servicesList}
            data={itemData}
            numColumns={2}
            renderItem={Item}
            keyExtractor={(item, index) => index}
          />
          <Text style={DiagnosticCenterDetailStyle.caption}>Tests</Text>
          <View style={DiagnosticCenterDetailStyle.underline}></View>
          {DiagnosticCenter.facilities.map((facility, index) => (
            <Text>
              {index + 1}. {facility}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiagnosticCenterDetailPage;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const DiagnosticCenterDetailStyle = StyleSheet.create({
  coverImage: {
    marginTop: -5,
    width: '100%',
    height: 0.5 * width,
    backgroundColor: '#e0e0e0',
  },
  DiagnosticCenterName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  card_section: {
    display: 'flex',

    flexDirection: 'row',
    marginVertical: 5,
  },
  card__description: {
    fontSize: 14,
    flex: 0.9,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  caption: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
  },

  underline: {
    height: 1,
    marginVertical: 7,
    width: '100%',
    backgroundColor: '#a0a0a0',
  },

  greenText: {
    color: 'green',
    fontSize: 12,
  },
  servicesList: {
    width: '100%',
    marginTop: 7,
  },
  serviceCard: {
    width: '45%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 10,
  },
});
