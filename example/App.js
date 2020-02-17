/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Linking,
} from 'react-native';
import DeepLinkWithResponse from 'react-native-deep-link-with-response';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: 300,
    marginBottom: 5,
    borderRadius: 12,
    fontSize: 14,
    backgroundColor: '#f7f7f7',
    borderWidth: 3,
    borderColor: '#45ccaa',
  },
});
export default function App() {
  const [status, setStatus] = useState('starting');
  const [message, setMessage] = useState('message');
  const [value, setValue] = useState('');
  async function pay(valueParam) {
    try {
      //configuration for number 12 tweenty digits

      const newValue = (1000000000000 + valueParam).toString().substring(1);
      const args = {
        amount: newValue,
      };
      const deepLinkExample = 'getnet://pagamento/v1/payment';
      const existAplication = await Linking.canOpenURL(deepLinkExample);
      if (existAplication) {
        const infoPayment = await DeepLinkWithResponse.startActivityForResult(
          1001, //code example someone number
          deepLinkExample, //deep link example
          args,
        );
        console.log(infoPayment);
        setStatus('Working');
        setMessage(JSON.stringify(infoPayment));
      }
    } catch (err) {
      setStatus('Error');
      setMessage(err.message);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>☆Geolocation example☆</Text>
      <Text style={styles.instructions}>STATUS: {status}</Text>
      <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
      <Text style={styles.instructions}>{message}</Text>
      <TextInput
        placeholder={'type it the value(only number):'}
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChange={text => setValue(text)}
      />
      <Button title="Press" onPress={() => pay(value)} />
    </View>
  );
}
