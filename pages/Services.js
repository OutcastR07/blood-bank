import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Services = ({ navigator }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
      }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Services
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            width: windowWidth / 3.1,
            height: windowWidth / 5,
            backgroundColor: '#eee',
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            flexDirection: 'row',
            paddingBottom: 15,
          }}
          onPress={() => {}}>
          <Image
            source={require('../images/doctor.png')}
            style={{ height: 50, width: 50 }}
          />
          <Text>Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: windowWidth / 3.8,
            height: windowWidth / 5,
            backgroundColor: '#eee',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../images/hospital.png')}
            style={{ height: 40, width: 40 }}
          />
          <Text>Hospitals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: windowWidth / 3.8,
            height: windowWidth / 5,
            backgroundColor: '#eee',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../images/tooth-cavity.png')}
            style={{ height: 50, width: 50 }}
          />
          <Text>Dentist</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              borderRadius: 10,
              padding: 10,
              width: windowWidth / 2.3,
              height: windowWidth / 4,
              backgroundColor: '#eee',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}>
            <View>
              <Text>Diagnostic </Text>
              <Text>Centers</Text>
            </View>
            <Image
              source={require('../images/hospital3.png')}
              style={{ height: 80, width: 70 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderRadius: 10,
            padding: 10,
            width: windowWidth / 2.3,
            height: windowWidth / 4,
            backgroundColor: '#eee',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}>
          <View>
            <Text>Blood </Text>
            <Text>Banks</Text>
          </View>
          <Image
            source={require('../images/blood-bag.png')}
            style={{ height: 80, width: 70 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Services;
