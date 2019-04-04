import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopContents from './TopContents';
import TabMenu from './TabMenu';
import MapContents from './MapContents';
import SearchContents from './SearchContents';
import OptionContents from './OptionContents';
import Empty from './Empty';
import BottomContents from './BottomContents';

export default class RootComponent extends React.Component {
  render() {
      return (
      <View style={styles.container}>
        <TopContents navigation={this.props}/>
        <TabMenu navigation={this.props}/>
        <MapContents />
        <SearchContents />
        <OptionContents />
        <Empty />
        <BottomContents navigation={this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    }
});
