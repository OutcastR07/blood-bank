import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const FundAskingPage = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <Text style={styles.title}>Asking for Fund</Text>
        <View style={styles.hr} />

        <View style={styles.patientInfo}>
          <Text style={styles.patientName}>
            Xabin
            <Text style={styles.patientAge}>, 32</Text>
          </Text>
        </View>

        <View style={styles.diseaseDetails}>
          <Text style={styles.caption}>
            Details about Disease:{' '}
            <Text style={styles.detailsText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              iure sed ducimus optio dolores odio commodi ex. Voluptate ab, sunt
              pariatur atque illum fugiat nemo assumenda nostrum perferendis
              suscipit quos voluptatem, sit laborum. Nobis, iste praesentium
              similique vero reiciendis quo.
            </Text>
          </Text>
        </View>

        <View style={styles.hospitalInfo}>
          <View style={styles.hospitalImage}>
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
          <View style={styles.nameAndPrice}>
            <Text style={styles.hospitalName}>Square Hospital Bangladesh</Text>
            <Text style={styles.requiredCaption}>
              Required: <Text style={styles.amount}>500,000 tk</Text>
            </Text>
          </View>
        </View>

        <View style={styles.paperworks}>
          <Text style={styles.paperworksTitle}>Paperworks</Text>

          <View style={styles.paperworksImageContainer}>
            <View style={styles.paperworksImage}>
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
            <View style={styles.paperworksImage}>
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
            <View style={styles.paperworksImage}>
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
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardLeft}>
            <Image
              source={require('../images/card-payment.png')}
              style={styles.cardImage}
            />
            <View style={styles.cardText}>
              <Text style={styles.cardPayment}>
                bKash No:{' '}
                <Text style={styles.cardMobileNumber}>01883672547</Text>
              </Text>
              <Text style={styles.cardPayment}>
                Nagad No:{' '}
                <Text style={styles.cardMobileNumber}>01883672547</Text>
              </Text>
            </View>
          </View>
          <View style={styles.cardDivider} />
          <View style={styles.cardRight}>
            <Image
              source={require('../images/bank.png')}
              style={styles.cardImage}
            />
            <View style={styles.cardText}>
              <Text style={styles.cardCaption}>
                Bank Name: <Text style={styles.cardValue}>AB Bank</Text>
              </Text>
              <Text style={styles.cardCaption}>
                Branch Name: <Text style={styles.cardValue}>Board Bazar</Text>
              </Text>
              <Text style={styles.cardCaption}>
                Bank Account No:{' '}
                <Text style={styles.cardValue}>4018735476300</Text>
              </Text>
              <Text style={styles.cardCaption}>
                Bank Account Name: <Text style={styles.cardValue}>Toukir</Text>
              </Text>
              <Text style={styles.cardCaption}>
                Bank Account Phone No:{' '}
                <Text style={styles.cardValue}>01992736352</Text>
              </Text>
              <Text style={styles.cardCaption}>
                Routing No: <Text style={styles.cardValue}>34201</Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  hr: {
    borderBottomColor: '#d0d0d1',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 16,
  },
  patientInfo: {
    flexDirection: 'row',
  },
  patientName: {
    fontWeight: '500',
    fontSize: 32,
  },
  patientAge: {
    fontWeight: '400',
    fontSize: 12,
  },
  diseaseDetails: {
    marginTop: 4,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  detailsText: {
    fontWeight: 'normal',
  },
  hospitalInfo: {
    marginVertical: 16,
  },
  hospitalImage: {
    backgroundColor: 'black',
    width: '100%',
    height: 175,
    borderRadius: 10,
    overflow: 'hidden',
  },
  nameAndPrice: {
    marginTop: 8,
  },
  hospitalName: {
    fontSize: 17,
    fontWeight: '500',
  },
  requiredCaption: {
    fontWeight: '500',
  },
  amount: {
    color: '#f65f61',
  },
  paperworks: {
    marginBottom: 10,
  },
  paperworksTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  paperworksImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paperworksImage: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    margin: 8,
    overflow: 'hidden',
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  cardLeft: {
    flex: 1,
    padding: 4,
    alignItems: 'flex-start',
  },
  cardRight: {
    flex: 1,
    padding: 4,
    alignItems: 'flex-start',
  },
  cardImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  cardDivider: {
    marginHorizontal: 8,
    width: 1,
    backgroundColor: 'black',
    height: '100%',
  },
  cardText: {
    marginVertical: 8,
  },
  cardPayment: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardMobileNumber: {
    fontWeight: 'normal',
    fontSize: 12,
  },
  cardCaption: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardValue: {
    fontWeight: 'normal',
    fontSize: 12,
  },
});

export default FundAskingPage;
