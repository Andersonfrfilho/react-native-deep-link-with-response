# react-native-deep-link-with-response

[![npm version](https://badge.fury.io/js/react-native-deep-link-with-response.svg)](http://badge.fury.io/js/react-native-deep-link-with-response)
![Supports Android](https://img.shields.io/badge/platforms-android-lightgrey.svg)
![MIT License](https://img.shields.io/npm/l/@react-native-community/geolocation.svg)<br>
[![npm total downloads](https://img.shields.io/npm/dt/react-native-deep-link-with-response.svg)](https://img.shields.io/npm/dt/react-native-deep-link-with-response.svg)
[![npm monthly downloads](https://img.shields.io/npm/dm/react-native-deep-link-with-response.svg)](https://img.shields.io/npm/dm/react-native-deep-link-with-response.svg)
[![npm weekly downloads](https://img.shields.io/npm/dw/react-native-deep-link-with-response.svg)](https://img.shields.io/npm/dw/react-native-deep-link-with-response.svg)<br>
Device Information for [React Native](https://github.com/facebook/react-native).<br>
Here's an image the example:

<img src="https://media.giphy.com/media/ekB3ubR3eSTaqApOM4/giphy.gif"/>

Move along.

## Getting started

### yarn

`$ yarn add react-native-deep-link-with-response`

### npm

`$ npm install react-native-deep-link-with-response --save`

### Mostly automatic installation

`$ react-native link react-native-deep-link-with-response`

## Usage \*Work Only Android

application required in the example [APK](https://getstore.getnet.com.br/developer/#/developer/home).

```javascript
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput
} from "react-native";
import DeepLinkWithResponse from "react-native-deep-link-with-response";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    width: 300,
    marginBottom: 5,
    borderRadius: 12,
    fontSize: 14,
    backgroundColor: "#f7f7f7",
    borderWidth: 3,
    borderColor: "#45ccaa"
  }
});
export default function App() {
  const [status, setStatus] = useState("starting");
  const [message, setMessage] = useState("message");
  const [value, setValue] = useState("");
  async function pay(valueParam) {
    try {
      //configuration for number 12 tweenty digits

      const newValue = (1000000000000 + valueParam).toString().substring(1);
      const args = {
        amount: newValue
      };
      const deepLinkExample = "getnet://pagamento/v1/payment";
      const existAplication = await Linking.canOpenURL(deepLinkExample);
      if (existAplication) {
        const infoPayment = await DeepLinkWithResponse.startActivityForResult(
          1001, //code example someone number
          deepLinkExample, //deep link example
          args
        );
        console.log(infoPayment);
        setStatus("Working");
        setMessage(JSON.stringify(infoPayment));
      }
    } catch (err) {
      setStatus("Error");
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
        placeholder={"type it the value(only number):"}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Press" onPress={() => pay(1000)} />
    </View>
  );
}
```

## Method

| Name                     | Param                | Type                   | values                                            |
| ------------------------ | -------------------- | ---------------------- | ------------------------------------------------- |
| `startActivityForResult` | `code,deepLink,args` | `number,string,object` | `any amount,DeepLink by application, {key:value}` |

this module was developed in order to use the getnet payment application
thanks for using it
