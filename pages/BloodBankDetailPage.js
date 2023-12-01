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
import { createMapsUrl } from '../utils/mapsUtils';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Item = ({ item }) => {
  return (
    <View style={bloodBankDetailStyle.serviceCard}>
      <Text style={{ textTransform: 'capitalize', fontSize: 12 }}>
        {item.text}
      </Text>

      <Text style={{fontSize: 12, color: item.color}}>{item.time}</Text>
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
  const {bloodBank} = route.params
  useEffect(() => {
    const vBloodBagdata = []
    for (let type of Object.keys(bloodBank.inventory)){
      vBloodBagdata.push({type, capacity: bloodBank.inventory[type]})
    }
    setBloodBagData(vBloodBagdata)
  },[bloodBank])
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
    Linking.openURL(createMapsUrl(bloodBank.location))
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
  const [serviceHours, setServiceHours] = useState([])
  useEffect(() => {
    let vServiceHours = []
    for(let day of Object.keys(bloodBank.serviceHours)){
      vServiceHours.push({
        text: day,
        time: !bloodBank.serviceHours.disabled ? `${bloodBank.serviceHours[day].from} - ${bloodBank.serviceHours[day].to}` : "Closed",
        color: !bloodBank.serviceHours.disabled ? "green" : "red"
      })
    }
    setServiceHours(vServiceHours)
  },[bloodBank])
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <ScrollView>
        <Text style={bloodBankDetailStyle.hospitalName}>
          {bloodBank.name}
        </Text>
        <View style={bloodBankDetailStyle.coverImage}>
          <Image
            style={{
              maxWidth: '100%',
              height: '100%',
              borderRadius: 4,
            }}
            source={{
              uri: bloodBank.imgUri,
            }}></Image>
        </View>
        <View style={{ padding: 20, marginBottom: 0 }}>
          <View style={bloodBankDetailStyle.card}>
            <View style={bloodBankDetailStyle.card_section}>
              <Image
                style={bloodBankDetailStyle.icon}
                source={require('../images/travel-map-location-pin.png')}
              />
              <Text style={bloodBankDetailStyle.card__description}>
                <Text>{bloodBank.location}</Text>
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
                source={require('../images/contact-book.png')}
              />
              <Text style={bloodBankDetailStyle.card__description}>
                {bloodBank.contactInfo.contactNo}
              </Text>
            </View>
            <View style={bloodBankDetailStyle.card_section}>
              <Image
                style={bloodBankDetailStyle.icon}
                source={require('../images/mail-send-email.png')}
              />
              <Text style={bloodBankDetailStyle.card__description}>
                {bloodBank.contactInfo.email}
              </Text>
            </View>
          </View>
          <Text style={bloodBankDetailStyle.caption}>Service hours</Text>
          <View style={bloodBankDetailStyle.underline}></View>
          <Text style={bloodBankDetailStyle.greenText}>Open 24 hours</Text>
          <FlatList
            contentContainerStyle={bloodBankDetailStyle.servicesList}
            data={serviceHours}
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
