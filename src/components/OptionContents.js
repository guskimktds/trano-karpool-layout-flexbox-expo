import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class OptionContents extends Component {
  render() {
    return (
      <View style={styles.optionContainer}>
        <View style={styles.dateSelectContainer}>
          <View>
            <Text style={[styles.text, styles.textBold]}>일시 </Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>현재</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>예약</Text>
          </View>
        </View>
        <View style={styles.destinationContainer}>
          <Text style={[styles.text, styles.textBold]}>옵션 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionContainer: {
    padding: 10,
    margin: 0,
    backgroundColor: '#001944',
    height: 110,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    color: "white",
    fontSize: 20
  },
  dateSelectContainer: {
    flex : 1,
    marginTop:1,
    marginBottom:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  destinationContainer: {
    flex : 1,
    marginTop:1,
    marginBottom:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  input: {
    fontSize: 14,
    color: "grey",
  },
  button: {
    backgroundColor: "red",
    marginLeft: 8,
    borderRadius: 10
  }
});
