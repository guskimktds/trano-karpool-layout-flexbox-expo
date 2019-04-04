import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class TopContents extends Component {
  render() {
    const { navigation } = this.props.navigation;

    return (
      <View style={styles.headerContatiner}>

        <View style={styles.headerHomeButtonContainer}>
          <Text style={styles.homeStyle}>홈</Text>
        </View>

        <View style={styles.headerTitleContainer}>
          <Text style={[styles.text, styles.textBold]}>사내카풀(Kar4U)</Text>
        </View>

        <View style={styles.headerMenuButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Text style={styles.menuStyle}>메뉴</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContatiner: {
    flex : 1,
    flexDirection: 'row',
    padding: 30,
    margin: 0,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: 'white',
    alignItems : 'center',
    justifyContent: 'space-between'
  },
  headerTitleContainer: {
    flex : 1,
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'center'
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  headerMenuButtonContainer: {
    flexDirection: 'row',
    alignItems : 'flex-end',
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 4
  },
  headerHomeButtonContainer: {
    flexDirection: 'row',
    alignItems : 'flex-end',
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 4
  },
  menuStyle: {
    color: "white",
    fontSize: 16,
  },
  homeStyle: {
    color: "white",
    fontSize: 16,
  },
  textBold: {
    fontWeight: 'bold'
  },

});
