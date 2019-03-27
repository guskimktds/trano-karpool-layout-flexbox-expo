import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TabMenu extends React.Component {
  render() {
    return (
      <View style={styles.tabMenuContainer}>
        <View style={styles.tabMenuButton}>
            <Text style={styles.text}>검색</Text>
        </View>
        <View style={[styles.tabMenuButton, {backgroundColor:'#001320'}]}>
            <Text style={styles.text}>신청</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabMenuContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#001944',
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    color: "white",
    fontSize: 16
  },
  tabMenuButton: {
    flexDirection: 'row',
    alignItems : 'center',
    backgroundColor: 'blue',
    width: 60,
    height: 40,
    padding: 5,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: 'grey',
    margin: 1,
    justifyContent: 'center'
  }
});
