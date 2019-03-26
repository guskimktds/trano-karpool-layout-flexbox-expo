import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BottomContents extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>카풀선택하기</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: '#FFFF00',
    flexGrow: 1,
    height: 60,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  },
  text: {
    color: "grey",
    fontSize: 16,
    textAlign: "center"
  }
});
