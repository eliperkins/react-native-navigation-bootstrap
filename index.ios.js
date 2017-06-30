/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActionSheetIOS,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class react_native_navigation_bootstrap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() =>
            this.props.navigator.showLightBox({
              screen: 'AlertLightbox',
              style: {
                backgroundBlur: 'dark',
              },
            })}
          title="Show Lightbox"
        />
      </View>
    );
  }
}

const LightboxContentView = ({ navigator }) =>
  <View>
    <Button
      onPress={() => {
        const LOG_OUT = 'Log Out';
        const CANCEL = 'Cancel';
        const options = [LOG_OUT, CANCEL];
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options,
            title: 'Are you sure you want to log out?',
            destructiveButtonIndex: options.indexOf(LOG_OUT),
            cancelButtonIndex: options.indexOf(CANCEL),
          },
          index => {
            const selection = options[index];
            switch (selection) {
              case LOG_OUT: {
                this.props.logout();
                break;
              }
              case CANCEL:
              default:
                break;
            }
          },
        );
      }}
      title="Show Alert"
    />
  </View>;

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
});

Navigation.registerComponent(
  'react-native-navigation-bootstrap',
  () => react_native_navigation_bootstrap,
);
Navigation.registerComponent('AlertLightbox', () => LightboxContentView);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-navigation-bootstrap',
    title: 'Navigation Bootstrap',
  },
});
