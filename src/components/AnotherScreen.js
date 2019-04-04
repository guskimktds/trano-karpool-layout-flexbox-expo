import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class AnotherScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    console.log(navigation.getParam("hi"));

    return (
      <View style={styles.container}>
        <View style={styles.topMenu}>
          <Text>Another Screen</Text>
          <Button
            title="Go to Another... again"
            onPress={() => this.props.navigation.push('Another')}
          />
          <Button
            title="Go to Detail"
            onPress={() => this.props.navigation.navigate('Detail')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={styles.contents}>
          <Text>
              여기는 Another 영역
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topMenu: {

  },
  contents: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
