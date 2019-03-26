import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TopContents extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>MapContents</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: '#000000',
    flexGrow: 1,
    height: 80,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  }
});
