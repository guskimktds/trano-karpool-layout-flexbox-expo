import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TabMenu extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>TabMenu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: '#001944',
    flexGrow: 1,
    height: 60,
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
