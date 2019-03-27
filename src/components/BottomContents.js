import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BottomContents extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>카풀목록 조회하기</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#DEDEDE',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    color: "#8080A0",
    fontSize: 16
  }
});
