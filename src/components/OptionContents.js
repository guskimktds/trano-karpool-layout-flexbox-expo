import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OptionContents extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>OptionContents</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: '#E8AF0C',
    flexGrow: 1,
    height: 110,
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
