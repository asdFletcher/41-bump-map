import React from 'react';
import { NetInfo, StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux';
import * as actions from "../store/actions.js";

import util from 'util';

const mapDispatchToProps = (dispatch) => {
  return ({
    wifi: (payload) => {
      return dispatch(actions.wifi(payload));
    },
  });
}

const mapStateToProps = (store) => {
  return ({
    connectionInfo: store.dataStore.connectionInfo,
  });
}


class NetSensor extends React.Component{
  componentDidMount() {
    // console.log(`mounted 🌰`);
    NetInfo.addEventListener('connectionChange', this._handleNetworkChange);
  }

  _handleNetworkChange = (connectionInfo) => {
    // console.log(`network change detected ⚾️ connectionInfo: ${util.inspect(connectionInfo)}`);
    // console.log(` 🍪🍪🍪${util.inspect(connectionInfo)}`);
    this.props.wifi(connectionInfo);
  }

  render(){
    // console.log(`rendering network`);
    // console.log(` 🍰🍰🍰 this.props.connectionInfo: ${util.inspect(this.props.connectionInfo)}`);

    let connection = this.props.connectionInfo ? this.props.connectionInfo.type : 'detecting...';
    return (
      <View style={[styles.container, styles.all]} >
        <Text style={[styles.text, styles.all, styles.textHeader]}>net sensor component</Text>
        <Text style={[styles.text, styles.all, styles.connection ]}>{connection}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    color: '#333333',
    fontFamily: 'sans-serif',
  },
  container: {
    marginTop: 10,
    flexDirection: 'column',
    backgroundColor: '#ecf0f1',
    padding: 25,
    marginBottom: 25,
    flex: 1,
  },
  text: {
    alignSelf: 'center',
  },
  textHeader: {
    fontSize: 20,
  },
  connection: {
    color: `#ff0000`,
    fontSize: 50,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NetSensor);