import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import ContextStore from '../../Context/ContextStore';

const NearbyHospitals = ({ navigation }) => {
  const {contextStore, setContextStore} = useContext(ContextStore)
  const [rows, setRows] = useState([])
  useEffect(() => {
    const vRows = []
    for(let i =0; i<contextStore.hospitals.length; i+=4){
      const columns = []
      for(let j = i; j < j+4 && j<contextStore.hospitals.length; j+=1){
        columns.push(contextStore.hospitals[j])
      }
      vRows.push(columns)
    }
    setRows(vRows)
  },[contextStore.hospitals])
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
      {rows.map(row => (
        <View style={styles.row}>
          {row.map(hospital => (
            <HospitalCard name={hospital.name} hospital={hospital} navigation={navigation} />
          ))}
        </View>
      ))}
      </View>
    </View>
  );
};

const HospitalCard = ({ name, color, navigation, hospital }) => {
  return (
    <TouchableOpacity
      style={styles.hospitalCardContainer}
      onPress={() => {
        navigation.navigate('HospitalDetailPage', {
          hospital
        });
      }}>
      <View style={[styles.card, { backgroundColor: 'black' }]}>
        <Image
          style={{
            width: 75,
            height: 75,
            borderRadius: 4,
          }}
          source={{
            uri: `${hospital.imgUri}`,
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
