import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FundSomeone = (item, navigation) => {
  return (
    <TouchableOpacity
      style={fundSomeonelistStyle.card}
      onPress={() => {
        // navigation.navigate('FundSomeoneDetailScreen', {id: item._id});
      }}>
      <View>
        <View style={fundSomeonelistStyle.cardView}>
          <Image
            style={{
              height: 20,
              width: 20,
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            source={require('../images/Starr.png')}
          />
          <View style={fundSomeonelistStyle.cardView__Left}>
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
          <View style={fundSomeonelistStyle.cardView__Right}>
            <Text
              style={fundSomeonelistStyle.cardView__Name}
              ellipsizeMode='tail'
              numberOfLines={1}>
              Xabin Chowdhury
            </Text>
            <Text
              ellipsizeMode='tail'
              numberOfLines={1}
              style={fundSomeonelistStyle.cardView__hospitalName}>
              Square Hospital Bangladesh
            </Text>
            <Text
              ellipsizeMode='tail'
              numberOfLines={1}
              style={fundSomeonelistStyle.cardView__RequiredAmount}>
              Requred Amount: Tk.10,000
            </Text>
          </View>
        </View>
        <Text
          ellipsizeMode='tail'
          numberOfLines={4}
          style={fundSomeonelistStyle.cardView__details}>
          Lorem Ipsum - Lorem Ipsum - The First Order Doctrine - The Second
          Order Doctrine - The Third Order Doctrine - The Fourth Order Doctrine
          - The Fifth Order Doctrine - The First Order Doctrine - The Second
          Order Doctrine - The Third Order Doctrine -
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const DonateBlood = (item, navigation) => {
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
            source={require('../images/Starr.png')}
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
            <Text style={{ fontSize: 12 }}>Priority: This Week</Text>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#3498db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
                borderRadius: 5,
              }}>
              <Text style={{ color: '#fff', flex: 1 }}>Request Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SavedItems = ({ navigation }) => {
  const itemData = [1, 2, 3, 4, 5, 6];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'flex-start',
        padding: 25,
      }}>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: 'bold',
          width: 250,
        }}>
        Saved Items
      </Text>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 20,
          width: 250,
        }}>
        Donate blood
      </Text>
      <ScrollView
        contentContainerStyle={{
          marginBottom: 20,
        }}>
        <FlatList
          data={itemData}
          numColumns={1}
          renderItem={({ item }) => DonateBlood(item, navigation)}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'black',
          marginVertical: 20,
        }}></View>
      <Text
        style={{
          fontSize: 20,
          width: 250,
          marginBottom: 10,
        }}>
        Fund Someone
      </Text>
      <ScrollView
        contentContainerStyle={{
          marginBottom: 20,
        }}>
        <FlatList
          data={itemData}
          numColumns={1}
          renderItem={({ item }) => FundSomeone(item, navigation)}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedItems;

const fundSomeonelistStyle = StyleSheet.create({
  caption: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
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
    height: 0.08 * windowHeight,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardView__Left: {
    backgroundColor: 'black',
    height: 0.08 * windowHeight,
    width: 0.08 * windowHeight,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardView__Right: {
    marginLeft: 10,
    flex: 1,
  },
  cardView__Name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardView__hospitalName: {
    fontSize: 14,
  },
  cardView__RequiredAmount: {
    fontSize: 12,
  },
  cardView__details: {
    fontSize: 10,
  },
});

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
    height: 0.08 * windowHeight,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardView__Left: {
    backgroundColor: 'black',
    height: 0.08 * windowHeight,
    width: 0.08 * windowHeight,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardView__Right: {
    marginLeft: 10,
    flex: 1,
  },
  cardView__Name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardView__hospitalName: {
    fontSize: 14,
  },
  cardView__RequiredAmount: {
    fontSize: 12,
    color: '#f4085d',
  },
  cardView__details: {
    fontSize: 10,
    flex: 0.55,
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
