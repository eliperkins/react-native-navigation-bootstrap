/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class react_native_navigation_bootstrap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

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
  button: {
    overflow: 'hidden',
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CustomButton = ({ text }) =>
  <TouchableOpacity
    style={[styles.button, { backgroundColor: 'tomato' }]}
    onPress={() => console.log('pressed me!')}
  >
    <View style={styles.button}>
      <Text style={{ color: 'white' }}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>;

Navigation.registerComponent(
  'react-native-navigation-bootstrap',
  () => react_native_navigation_bootstrap,
);
Navigation.registerComponent('CustomButton', () => CustomButton);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-navigation-bootstrap',
    title: 'Navigation Bootstrap',
    navigatorButtons: {
      leftButtons: [
        {
          id: 'custom',
          component: 'CustomButton',
          passProps: {
            text: 'Wow',
          },
        },
      ],
    },
  },
});
