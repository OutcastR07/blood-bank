import React, { useContext, useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Item = (item, navigation) => {
  return (
    <TouchableOpacity
      style={donateBloodStyle.card}
      onPress={() => {
        // navigation.navigate('DonateBloodDetailScreen', {id: item._id});
      }}>
      <View>
        <View style={donateBloodStyle.cardView}>
          <Image
            style={{
              height: 20,
              width: 20,
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            source={require('../images/interface-favorite-star.png')}
          />
          <View style={donateBloodStyle.cardView__Left}>
            <Image
              style={{
                height: '100%',
                width: '100%',
              }}
              source={{
                uri: `https://upload.wikimedia.org/wikipedia/commons/8/88/Hospital-de-Bellvitge.jpg`,
              }}
            />
          </View>
          <View style={donateBloodStyle.cardView__Right}>
            <Text
              style={donateBloodStyle.cardView__Name}
              ellipsizeMode='tail'
              numberOfLines={1}>
              Xabin Chowdhury
            </Text>
            <Text
              ellipsizeMode='tail'
              numberOfLines={1}
              style={donateBloodStyle.cardView__hospitalName}>
              Square Hospital Bangladesh
            </Text>
            <Text
              ellipsizeMode='tail'
              numberOfLines={1}
              style={donateBloodStyle.cardView__RequiredAmount}>
              Required: B+ (2 Bags)
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Text
            ellipsizeMode='tail'
            numberOfLines={4}
            style={donateBloodStyle.cardView__details}>
            <Text style={{ fontWeight: 'bold' }}>Message: </Text> Lorem Ipsum -
            Lorem Ipsum - The First Order Doctrine - The Second Order Doctrine -
            The Third Order Doctrine - The Fourth Order Doctrine - The Fifth
            Order Doctrine - The First Order Doctrine - The Second Order
            Doctrine - The Third Order Doctrine -
          </Text>
          <View style={{ flex: 0.4 }}>
            <Text>Priority: This Week</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BloodRequestPage');
              }}
              style={{
                width: '100%',
                backgroundColor: '#3498db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{ color: '#fff', flex: 1 }}>Request Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const DonateBloodPage = ({ navigation, route }) => {
  const [crowdFundings, setCrowdFundings] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 8, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility

  const [selectedOption, setSelectedOption] = useState(null); // State for selected option

  const handleOptionSelect = (option) => {
    console.log(option);
    setSelectedOption(option);
  };
  //   useEffect(() => {
  //     (async () => {
  //       contextStore.setShowSpinner(true)
  //       let crowdFundings
  //       switch(type){
  //         case "all":
  //           crowdFundings = await dispatch(actions.getAllCrowdFunding, {type}, {}, )
  //           setCrowdFundings(crowdFundings)
  //           break
  //         case "own":
  //           crowdFundings = await dispatch(actions.getAllCrowdFunding, {type}, {}, contextStore.user.token)
  //           setCrowdFundings(crowdFundings)
  //           break
  //       }
  //       contextStore.setShowSpinner(false)
  //     })()
  //   }, [type])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <ScrollView>
        <View style={{ padding: 15 }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <Text style={donateBloodStyle.caption}>Donate Blood </Text>
            <TouchableOpacity
              style={donateBloodStyle.nearbyContainer}
              onPress={() => setModalVisible(true)}>
              <Image
                source={require('../images/filter.png')}
                style={donateBloodStyle.locationIcon}
              />

              <Text style={donateBloodStyle.nearbyText}>Filter</Text>
              <Image
                source={require('../images/interface-arrows-button-down.png')}
                style={donateBloodStyle.dropdownIcon}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={donateBloodStyle.scrollviewContainer}>
            <FlatList
              data={crowdFundings}
              numColumns={1}
              renderItem={({ item }) => Item(item, navigation)}
              keyExtractor={(item, index) => index}
            />
          </ScrollView>
        </View>
      </ScrollView>
      {/* Modal */}
      {isModalVisible && (
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={donateBloodStyle.modalOverlay}>
            <View style={donateBloodStyle.modal}>
              <Text>Filter Based on Dates</Text>
              <View style={{ marginTop: 10 }}>
                {/* Options */}
                <TouchableOpacity
                  onPress={() => handleOptionSelect('latest')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    marginVertical: 10,
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 5,
                      borderWidth: 1,
                      marginRight: 10,
                      backgroundColor:
                        selectedOption === 'latest' ? '#3498db' : '#fff',
                    }}></View>
                  <Text>Lastest</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    marginVertical: 10,
                  }}
                  onPress={() => handleOptionSelect('thisWeek')}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 5,
                      borderWidth: 1,
                      marginRight: 10,
                      backgroundColor:
                        selectedOption === 'thisWeek' ? '#3498db' : '#fff',
                    }}></View>
                  <Text>This week</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    marginVertical: 10,
                  }}
                  onPress={() => handleOptionSelect('lastWeek')}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 5,
                      borderWidth: 1,
                      marginRight: 10,
                      backgroundColor:
                        selectedOption === 'lastWeek' ? '#3498db' : 'fff',
                    }}></View>
                  <Text>Last week</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </SafeAreaView>
  );
};

export default DonateBloodPage;

const donateBloodStyle = StyleSheet.create({
  caption: {
    fontSize: 25,
    fontWeight: 'bold',
    width: 200,
  },
  scrollviewContainer: {
    // height: 0.7 * windowHeight,
  },
  card: {
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  cardView: {
    position: 'relative',
    height: 0.1 * windowHeight,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardView__Left: {
    backgroundColor: 'black',
    height: 0.1 * windowHeight,
    width: 0.1 * windowHeight,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardView__Right: {
    marginLeft: 10,
    flex: 1,
  },
  cardView__Name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardView__hospitalName: {
    fontSize: 15,
  },
  cardView__RequiredAmount: {
    fontSize: 14,
    color: '#f4085d',
  },
  cardView__details: {
    fontSize: 12,
    flex: 0.5,
  },
  nearbyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
    borderWidth: 1,
    position: 'relative',
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

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: windowHeight,
  },
  modal: {
    backgroundColor: '#ecf3ff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalCloseButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  selectedOption: {
    backgroundColor: '#3498db', // Change to the color you want for selected option
    padding: 5,
    borderRadius: 5,
  },
});
