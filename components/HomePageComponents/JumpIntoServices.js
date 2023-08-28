import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const JumpIntoServices = ({ navigation }) => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.header}>
        <Text style={styles.jumpText}>Jump into services</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ServicesPage');
          }}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <CardItem
          onClick={() => {
            navigation.navigate('DoctorsPage');
          }}
          title='Doctors'
          imageSource={require('../../images/doctor.png')}
        />
        <CardItem
          onClick={() => {
            navigation.navigate('HospitalsPage');
          }}
          title='Hospitals'
          imageSource={require('../../images/hospital.png')}
        />
        <CardItem
          onClick={() => {
            navigation.navigate('BloodBanksPage');
          }}
          title='Blood Banks'
          imageSource={require('../../images/blood-bag.png')}
        />
        <CardItem
          onClick={() => {
            navigation.navigate('BloodBankDetailPage');
          }}
          title='Diagnostic Centers'
          imageSource={require('../../images/diagnostic-center.png')}
        />
      </View>
    </View>
  );
};

const CardItem = ({ title, imageSource, onClick }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={styles.cardItem}>
      <View style={styles.imageItem}>
        <Image
          source={imageSource}
          style={styles.cardImage}
          resizeMode='contain'
        />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#fff',
    marginBottom: 12,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jumpText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 10,
    color: '#b2b2b2',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
  },
  imageItem: {
    backgroundColor: '#efeeef',
    width: 70,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 45,
    height: 45,
    margin: 4,
  },
  cardTitle: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default JumpIntoServices;
