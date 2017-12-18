import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//redux
import {Provider} from 'react-redux'
import configureStore from './app/configureStore'
import AppMain from './app/containers/AppMain'

const store = configureStore()

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppMain/>
      </Provider>
    );
  }
}

