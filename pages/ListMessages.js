import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ListMessages = ({ navigation }) => {
  const index = [0, 1, 2, 3, 4, 3, 5, 1, 2, 3, 4, 5];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          fontSize: 20,
          fontWeight: 'bold',
          width: 160,
        }}>
        Messages
      </Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, width: '100%' }}>
        {index.map(() => (
          <TouchableOpacity
            style={ListMessagesStyle.cardView}
            onPress={() => {
              navigation.navigate('Messages');
            }}>
            <View style={ListMessagesStyle.cardView__Left}></View>
            <View style={ListMessagesStyle.cardView__Right}>
              <Text
                style={ListMessagesStyle.cardView__doctorName}
                ellipsizeMode='tail'
                numberOfLines={1}>
                Dr. Syed Mahmud Mahi
              </Text>
              <Text
                ellipsizeMode='tail'
                numberOfLines={2}
                style={ListMessagesStyle.cardView__details}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListMessages;

const ListMessagesStyle = StyleSheet.create({
  screenBody: {
    height: 0.9 * height,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  reownedDoctorsCaption: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 80,
  },

  cardView: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#f7f7f7',
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  cardView__Left: {
    backgroundColor: '#3498db',
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  cardView__Right: {
    marginLeft: 10,
    flex: 1,
  },
  cardView__doctorName: {
    fontSize: 18,
    fontWeight: '500',
  },
  cardView__hospitalName: {
    fontSize: 15,
  },
  cardView__details: {
    fontSize: 12,
    numberOfLines: 2,
  },
  reownedDoctorCardList: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: -5,
  },
  nearbyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
    marginVertical: 4,
  },
  locationIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  dropdownIcon: {
    width: 9,
    height: 9,
    marginRight: 2,
  },
  nearbyText: {
    fontSize: 13,
    color: '#333',
    marginRight: 8,
  },
});
