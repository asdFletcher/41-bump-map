import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";
import { When } from "./if.js";
import util from 'util';

const mapDispatchToProps = (dispatch) => {
  // console.log(`in MDTP util.inspect(dispatch)🌰: ${util.inspect(dispatch)}`);
  return ({
    saveLoc: (payload) => {
      return dispatch(actions.saveLoc(payload));
    },
  });
}

const mapStateToProps = (store) => {
  // console.log(`in MSTP util.inspect(actions)🌰: ${util.inspect(store.dataStore.networkInfo)}`);
  return ({
    networkInfo: store.dataStore.networkInfo,
  });
}

class Uploader extends React.Component {
  state = {

  };

  render() {
    // console.log(`in the uploader render`);
    return (
      <View style={[styles.container, styles.all]}>
        <View>
          <Text style={[styles.text, styles.all, styles.textHeader]}>uploader component</Text>
        </View>

        <View>
          <Text>Wifi check box</Text>
          <When condition={this.props.networkInfo.type === "wifi"}>
            <Text>✔︎</Text>
          </When>
          <When condition={false}>
            <Text>✘</Text>
          </When>
        </View>

        <View>
          <Text>Charging check box</Text>
          <When condition={false}>
            <Text>✔︎</Text>
          </When>
          <When condition={true}>
            <Text>✘</Text>
          </When>
        </View>

        <View>
          <Text>Ready to upload</Text>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);