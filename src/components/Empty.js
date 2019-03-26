import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Empty extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>EmptyEmptyEmptyEmptyEmptyEmptyEmptyEmptyEmpty</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    flexGrow: 1 
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center"
  }
});
