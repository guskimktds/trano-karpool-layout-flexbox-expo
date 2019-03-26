import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MapContents extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>지도 표시 영역</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: '#E2E4E5',
    flexGrow: 1,
    height: 180,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center"
  }
});
