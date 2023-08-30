import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const WaysToUseBloodBank = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        <Text style={styles.bold}>Ways to use Blood bank</Text>
      </Text>
      <Image
        source={require('../../images/Bloodbank-Bg.png')}
        style={styles.image}
        resizeMode='contain'
      />
      <Image
        source={require('../../images/Blood-bank-bg-picture.png')}
        style={styles.overlayImage}
        resizeMode='contain'
      />
      <TouchableOpacity
        style={styles.overlayContainer}
        onPress={() => {
          navigation.navigate('SaveSomeoneToday');
        }}>
        <Text style={styles.overlayText}>Request blood for patient</Text>
        <View style={styles.learnMoreContainer}>
          <Text style={styles.learnMoreText}>Learn more</Text>
          <Image
            source={require('../../images/interface-arrows-right-white.png')}
            style={styles.arrayIcon}
            resizeMode='contain'
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 32,
    position: 'relative',
  },
  boldText: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 100,
    marginTop: 10,
  },
  overlayImage: {
    position: 'absolute',
    left: -3,
    bottom: 0.4,
    width: '60%',
    height: 99,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    overflow: 'hidden',
  },
  overlayContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '40%',
    height: 100,
    padding: 12,
  },
  overlayText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  learnMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  learnMoreText: {
    fontSize: 12,
    marginRight: 5,
    color: 'white',
  },
  arrayIcon: {
    width: 12,
    height: 12,
  },
});

export default WaysToUseBloodBank;
