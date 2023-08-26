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
    <View
      style={{
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
      }}>
      <Text style={{ textTransform: 'capitalize', fontSize: 12 }}>
        Saturday
      </Text>

      <Text
        style={{
          color: 'green',
          fontSize: 12,
        }}>
        9am to 5pm
      </Text>
    </View>
  );
};

const DoctorDetailPage = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  let itemData = [1, 2, 3, 4, 5];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View
          style={{
            width: '100%',
            height: 0.5 * width,
            backgroundColor: '#e0e0e0',
            position: 'relative',
          }}>
          <Image
            style={{
              width: width,
              height: '100%',
              borderRadius: 4,
            }}
            source={{
              uri: `https://upload.wikimedia.org/wikipedia/commons/8/88/Hospital-de-Bellvitge.jpg`,
            }}></Image>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: '#fdb924',
              width: 180,
              textAlign: 'center',
              borderRadius: 10,
              position: 'absolute',
              bottom: -20,
              right: 20,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Kidney Specialist
          </Text>
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '500',
            paddingHorizontal: 20,
            paddingTop: 20,
          }}>
          Dr. Xabina Chowdhury
        </Text>
        <Text style={{ fontSize: 16, paddingHorizontal: 20 }}>
          Lorem ipsum dolor sit amet lorem, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut lab et dolore magna aliqua. Ut enim ad
          minim
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: 20,
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View
              style={{
                backgroundColor: '#EBEDFF',
                height: 60,
                width: 60,
                borderRadius: 15,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
            <Text style={{ width: 100, marginHorizontal: 10 }}>
              MBBS, BCS (Health), DDV (SKIN & VD, BSMMU)
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#EBEDFF',
                height: 60,
                width: 60,
                borderRadius: 15,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
            <Text style={{ width: 100, marginHorizontal: 10 }}>
              MBBS, BCS (Health), DDV (SKIN & VD, BSMMU)
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#EBEDFF',
                height: 60,
                width: 60,
                borderRadius: 15,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
            <Text style={{ width: 100, marginHorizontal: 10 }}>
              MBBS, BCS (Health), DDV (SKIN & VD, BSMMU)
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#EBEDFF',
                height: 60,
                width: 60,
                borderRadius: 15,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
            <Text style={{ width: 100, marginHorizontal: 10 }}>
              MBBS, BCS (Health), DDV (SKIN & VD, BSMMU)
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '500',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          Chamber
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            paddingHorizontal: 20,
            paddingVertical: 0,
          }}>
          Labaid Diagnostic Malibagh
        </Text>
        <Text
          style={{
            fontSize: 16,

            paddingHorizontal: 20,
            paddingVertical: 0,
          }}>
          <Text
            style={{
              fontWeight: '500',
            }}>
            Address:
          </Text>{' '}
          House#11, Road#11, Sector#11, Uttara, Dhaka-1230
        </Text>
        <Text
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            paddingVertical: 0,
            color: '#2980b9',
          }}>
          View in Gooogle Maps
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 25,
            paddingHorizontal: 20,
          }}>
          Visiting hours
        </Text>
        <View
          style={{
            height: 1,
            marginHorizontal: 20,
            marginVertical: 7,
            width: '90%',
            backgroundColor: '#a0a0a0',
          }}></View>

        <FlatList
          contentContainerStyle={{ width: '100%', marginTop: 7 }}
          data={itemData}
          numColumns={2}
          renderItem={Item}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              backgroundColor: '#e50073',
              color: '#fff',
              padding: 10,
              fontWeight: '500',
              textAlign: 'center',
              width: 170,
              borderRadius: 20,
            }}>
            Make an Appointment
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDetailPage;
