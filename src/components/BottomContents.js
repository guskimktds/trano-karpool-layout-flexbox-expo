import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class BottomContents extends React.Component {
  render() {
    const { navigation } = this.props.navigation;
    
    return (
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('DriveSearch')}>
          <Text style={styles.text}>카풀목록 조회하기</Text>
        </TouchableOpacity>
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
