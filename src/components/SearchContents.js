import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class SearchContents extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.waypointContainer}>
          <Text style={[styles.text, styles.textBold]}>경유지(현위치) : </Text>
          <TextInput style={styles.input} placeholder={'케이티스포츠센터'}></TextInput>
        </View>
        <View style={styles.destinationContainer}>
          <Text style={[styles.text, styles.textBold]}>도착지 : </Text>
          <TextInput style={styles.input} placeholder={'검색'}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    margin: 0,
    backgroundColor: '#DEDEDE',
    flexGrow: 1,
    height: 110,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  textBold: {
    fontWeight: "bold"
  },
  waypointContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 4,
    backgroundColor: "#EAF7F7",
    alignSelf: 'stretch'
  },
  destinationContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 4,
    backgroundColor: "#F8F7EA",
    alignSelf: 'stretch'
  },
  input: {
    fontSize: 20,
    color: "grey",
  }
});
