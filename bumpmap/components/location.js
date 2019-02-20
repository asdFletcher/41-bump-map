import React from 'react';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import { Constants, Location } from 'expo';
import util from 'util';

import * as actions from "../actions.js";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  // console.log(`in MDTP util.inspect(dispatch)🌰: ${util.inspect(dispatch)}`);
  // console.log(`in MDTP util.inspect(actions)🌰: ${util.inspect(actions)}`);
  return ({
    saveLoc: (payload) => {
      return dispatch(actions.saveLoc(payload));
    },
  });
}

const mapStateToProps = (store) => {
  return ({
    lastLocation: store.dataStore.lastLocation,
  });
}

class GPSSensor extends React.Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount = () => {
    console.log(`will mount 🍏`)
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._registerLocationGetter();
    }
  }

  _registerLocationGetter = async () => {
    console.log(`_registerLocationGetter: ⚽️`);
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let options = {
      accuracy: 5,
      showsBackgroundLocationIndicator: true,
      timeInterval: 16,
    };
    // Location.watchPositionAsync(options, this._handlePositionData.bind(this));
    this._locationGetter();
  }

  _locationGetter = () => {
    setInterval( async () => {
      let location = await Location.getCurrentPositionAsync({});
      this._handlePositionData( location );
    }, 750);
  }

  _handlePositionData(location){
    this.props.saveLoc(location);
  }

  render() {
    let { timestamp } = this.props.lastLocation;
    let { heading, speed, longitude, latitude } = this.props.lastLocation.coords;
    let text = 'Waiting on location..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.props.lastLocation) {
      text = JSON.stringify(this.props.lastLocation);
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.all, styles.textHeader]} >GPS Data:</Text>
        <Text style={[styles.text, styles.all]} >time: {timestamp}</Text>
        <Text style={[styles.text, styles.all]} >heading: {heading}</Text>
        <Text style={[styles.text, styles.all]} >speed: {speed}</Text>
        <Text style={[styles.text, styles.all]} >latitude: {latitude}</Text>
        <Text style={[styles.text, styles.all]} >longitude: {longitude}</Text>
      </View>
    );
  }
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  all: {
    color: '#333333',
    fontFamily: 'sans-serif',
  },
  container: {
    marginTop: 10,
    height: 200,
    width: width*90/100,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 25,
  },
  text: {
    alignSelf: 'flex-start',
  },
  textHeader: {
    fontSize: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GPSSensor)
