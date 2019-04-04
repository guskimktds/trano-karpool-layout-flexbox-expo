import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class DetailScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    console.log(navigation.getParam("hi"));

    return (
      <View style={styles.container}>
        <View style={styles.topMenu}>
          <Text>Detail Screen</Text>
          <Button
            title="Go to Detail... again"
            onPress={() => this.props.navigation.push('Detail')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go to Another"
            onPress={() => this.props.navigation.navigate('Another')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={styles.contents}>
          <Text>
              여기는 카풀운행정보 등록화면 영역
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
