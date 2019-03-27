import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MapContents extends Component {
  render() {
    return (
      <View style={styles.mapContainer}>
        <Text style={styles.text}>placeholder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    padding: 5,
    margin: 5,
    backgroundColor: 'black',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  },
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: 'grey',
  }
});
