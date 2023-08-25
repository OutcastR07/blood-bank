import React, { useContext, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Item = ({ item }) => {
  return (
    <View style={bloodBankDetailStyle.serviceCard}>
      <Text style={{ fontSize: 12 }}>Saturday</Text>
      <Text style={bloodBankDetailStyle.smallGreenText}>Open 24/7</Text>
    </View>
  );
};

const BloodBagCapacity = ({ item }) => {
  const { type, capacity } = item;
  return (
    <View style={{ margin: 5 }}>
      <View>
        <Text style={bloodBankDetailStyle.bloodCapacity}>{capacity}</Text>
      </View>
      <View>
        <Text style={bloodBankDetailStyle.bloodTypeText}>{type}</Text>
      </View>
    </View>
  );
};

const BloodBankDetailPage = ({ navigate, route }) => {
  // const { contextStore, setContextStore } = useContext(ContextStore);
  // const { id } = route.params;
  const [bloodBank, setBloodBank] = useState({
    name: '',
    location: '',
    contactInfo: '',
    inventory: {},
    imgUri: '',
  });
  // useEffect(() => {
  //   (async () => {
  //     contextStore.setShowSpinner(true);
  //     const bloodBank = await dispatch(actions.getOneBloodBank, { id });
  //     if (!bloodBank.error) {
  //       setBloodBank(bloodBank);
  //       const vBloodBagData = [];
  //       for (const [key, value] of Object.entries(bloodBank.inventory)) {
  //         vBloodBagData.push({
  //           type: key,
  //           capacity: value,
  //         });
  //       }
  //       setBloodBagData(vBloodBagData);
  //     }
  //     contextStore.setShowSpinner(false);
  //   })();
  // }, [id]);
  const onClickViewOnGoogleMap = () => {
    // let apiBaseUrl =
    //   'https://www.google.com/maps/search/?' +
    //   generateSearchString({ api: 1, query: bloodBank.location });
    // Linking.openURL(apiBaseUrl);
  };
  let itemData = [1, 2, 3, 4, 5, 6];
  const [bloodBagData, setBloodBagData] = useState([
    { type: 'A+', capacity: 21 },
    { type: 'A-', capacity: 21 },
    { type: 'AB+', capacity: 21 },
    { type: 'AB-', capacity: 21 },
    { type: 'B+', capacity: 21 },
    { type: 'B-', capacity: 21 },
    { type: 'O+', capacity: 21 },
    { type: 'O-', capacity: 21 },
  ]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <ScrollView>
        <Text style={bloodBankDetailStyle.hospitalName}>
          Quantam Blood Bank
        </Text>
        <View style={bloodBankDetailStyle.coverImage}>
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
        <View style={{ padding: 20, marginBottom: 0 }}>
          <View style={bloodBankDetailStyle.card}>
            <View style={bloodBankDetailStyle.card_section}>
              <Image
                style={bloodBankDetailStyle.icon}
                source={require('../images/mail-send-email.png')}
              />
              <Text style={bloodBankDetailStyle.card__description}>
                <Text>Road 18, Plot 81, Moghbazar, Dhaka - 1217</Text>
                <TouchableOpacity onPress={onClickViewOnGoogleMap}>
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
            <View style={bloodBankDetailStyle.card_section}>
              <Image
                style={bloodBankDetailStyle.icon}
                source={require('../images/mail-send-email.png')}
              />
              <Text style={bloodBankDetailStyle.card__description}>
                01914001234
              </Text>
            </View>
            <View style={bloodBankDetailStyle.card_section}>
              <Image
                style={bloodBankDetailStyle.icon}
                source={require('../images/mail-send-email.png')}
              />
              <Text style={bloodBankDetailStyle.card__description}>
                bloodBank@quantum.com
              </Text>
            </View>
          </View>
          <Text style={bloodBankDetailStyle.caption}>Service hours</Text>
          <View style={bloodBankDetailStyle.underline}></View>
          <Text style={bloodBankDetailStyle.greenText}>Open 24 hours</Text>
          <FlatList
            contentContainerStyle={bloodBankDetailStyle.servicesList}
            data={itemData}
            numColumns={2}
            renderItem={Item}
            keyExtractor={(item, index) => index}
          />
          <Text style={bloodBankDetailStyle.caption}>
            <Text>Capcity</Text>
            <Text style={{ fontSize: 12, fontWeight: '500' }}> (Bag(s))</Text>
          </Text>
          <View style={bloodBankDetailStyle.underline}></View>
          <FlatList
            contentContainerStyle={bloodBankDetailStyle.capacityList}
            data={bloodBagData}
            numColumns={8}
            renderItem={BloodBagCapacity}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 30,
            flexDirection: 'row',
          }}>
          <View>
            <Text>Pick Up Available</Text>
            <Text>Delivery Available</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: '#e50073',
                color: 'white',
                padding: 10,
                borderRadius: 20,
              }}>
              Request blood immediately
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BloodBankDetailPage;
const bloodBankDetailStyle = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 0.5 * width,
    backgroundColor: '#e0e0e0',
  },
  hospitalName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 0,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: '#ccc',
    backgroundColor: 'black',
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
    marginVertical: 2.5,
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
  },
  smallGreenText: {
    color: 'green',
    fontSize: 12,
  },
  servicesList: {
    width: '100%',
    marginTop: 7,
  },
  serviceCard: {
    width: '45%',
    paddingHorizontal: 5,
    paddingVertical: 5,
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
  bloodCapacity: {
    width: 35,
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    textAlign: 'center',
  },
  bloodTypeText: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },

  capacityList: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});
