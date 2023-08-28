import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const NearbyHospitals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.leftText}>Nearby Hospitals</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HospitalsPage');
          }}>
          <Text style={styles.rightText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          <HospitalCard name='Hospital 1' navigation={navigation} />
          <HospitalCard name='Hospital 2' navigation={navigation} />
          <HospitalCard name='Hospital 3' navigation={navigation} />
          <HospitalCard name='Hospital 4' navigation={navigation} />
        </View>
        <View style={styles.row}>
          <HospitalCard name='Hospital 5' navigation={navigation} />
          <HospitalCard name='Hospital 6' navigation={navigation} />
          <HospitalCard name='Hospital 7' navigation={navigation} />
          <HospitalCard name='Hospital 8' navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const HospitalCard = ({ name, color, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.hospitalCardContainer}
      onPress={() => {
        navigation.navigate('HospitalDetailPage');
      }}>
      <View style={[styles.card, { backgroundColor: 'black' }]}>
        <Image
          style={{
            width: 75,
            height: 75,
            borderRadius: 4,
          }}
          source={{
            uri: `https://upload.wikimedia.org/wikipedia/commons/8/88/Hospital-de-Bellvitge.jpg`,
          }}></Image>
      </View>
      <Text style={styles.hospitalName}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  leftText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 12,
    color: '#434242',
  },
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  card: {
    width: 75,
    height: 75,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  hospitalCardContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  hospitalName: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
});

export default NearbyHospitals;
