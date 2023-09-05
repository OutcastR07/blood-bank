import React from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';

const ReceivedText = () => {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        marginVertical: 10,
      }}>
      <Text style={{ fontWeight: '500', width: '100%', marginBottom: 5 }}>
        Doctor
      </Text>
      <Text
        style={{
          color: '#f7f7f7',
          backgroundColor: '#3498db',
          padding: 10,
          borderRadius: 10,
        }}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </Text>
    </View>
  );
};

const SendText = () => {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        marginVertical: 10,
      }}>
      <Text
        style={{
          fontWeight: '500',
          width: '100%',
          textAlign: 'right',
          marginBottom: 5,
        }}>
        You
      </Text>
      <Text
        style={{
          color: '#f7f7f7',
          backgroundColor: '#3498db',
          padding: 10,
          borderRadius: 10,
        }}>
        Okay. I understand.
      </Text>
    </View>
  );
};

const Messages = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          //   justifyContent: 'center',
          padding: 20,
          borderBottomWidth: 10,
          width: '100%',
          borderColor: '#ccc',
        }}>
        <Image
          style={{ height: 30, width: 30, borderRadius: 15, marginRight: 10 }}
          source={{
            uri: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg',
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: '500', width: 250 }}>
          Dr. Sayed Mahmud Mahi
        </Text>
      </View>
      <ScrollView
        overScrollMode='always'
        contentContainerStyle={{
          paddingHorizontal: 20,
          width: '100%',
        }}>
        <ReceivedText />
        <SendText />
        <ReceivedText />
        <SendText />
        <ReceivedText />
        <SendText />
        <SendText />
        <SendText />
      </ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <TextInput
          placeholder='Message'
          style={{
            backgroundColor: '#f3fbff',
            borderWidth: 1,
            borderColor: '#ccc',
            flex: 0.8,
            padding: 10,
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            backgroundColor: '#10462e',
            flex: 0.15,
            padding: 14,
            borderRadius: 10,
            textAlign: 'center',
            color: '#FFFFFF',
          }}>
          Send
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Messages;
