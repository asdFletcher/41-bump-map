import React from 'react';
import { NetInfo, StyleSheet, Text, View } from "react-native";
import util from 'util';

class NetSensor extends React.Component{

  state = {
    connectionType: '',
  }

  componentDidMount() {
    console.log(`mounted 🌰`);
    console.log(`NetInfo ${util.inspect(NetInfo)}`)
    NetInfo.addEventListener('connectionChange', (connectionInfo) => {
      console.log(`network change detected ⚾️ connectionInfo: ${util.inspect(connectionInfo)}`);
      this.setState({connectionType: connectionInfo.type});
    });
  }

  render(){
    return (
      <View style={[styles.container, styles.all]} >
        <Text style={[styles.text, styles.all, styles.textHeader]} >net sensor component:</Text>
        <Text style={[styles.text, styles.all, styles.connection ]} >{this.state.connectionType}</Text>
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

export default NetSensor;