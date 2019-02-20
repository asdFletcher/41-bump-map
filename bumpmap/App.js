import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AccelerometerSensor from "./components/accel.js";
import GPSSensor from "./components/location.js";
import NetSensor from "./components/netsensor";
import Uploader from "./components/uploader";

// import * as actions from "./store/actions.js";
import { Provider } from "react-redux";

import createStore from '../index.js';
const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView contentContainerStyle={styles.container}>
          <AccelerometerSensor />
          <GPSSensor />
          <NetSensor />
          <Uploader />
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
