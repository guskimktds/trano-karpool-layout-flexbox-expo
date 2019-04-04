import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import Conditions from "./Condition";
import DriveInfoList from "./DriveInfoList";

const {height, width } = Dimensions.get("window");

export default class DriveSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newRoute : '',
      keyword : '',
      viewflag : '',
      option: '',
      searchParam: {}
    }
  }

  _controlNewRoute = text => {
    this.setState({
      newRoute: text
    });
  };

  _searchHandling = () => {
    console.log("_searchHandling");
  };

  render() {
    const { newRoute} = this.state;
    return (
      <View style={styles.container}>
          <StatusBar barStyle="light-content"  />
          <View style={styles.topContainer}>
            <TextInput
              style={styles.input}
              placeholder={"출발지 또는 도착지를 입력하세요"}
              value={newRoute}
              onChangeText={this._controlNewRoute}
            />
          <TouchableOpacity style={styles.searchButton} onPress={this._searchHandling}>
              <View>
                <Text style={styles.searchButtonText}>검색</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.button} onPress={this.optionHandling}>
              <View >
                <Text style={styles.buttonText}>전체</Text>
              </View>
            </TouchableOpacity >
            <TouchableOpacity style={[styles.button, {backgroundColor: '#717571'}]} >
              <View >
                <Text style={styles.buttonText}>출근</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#717571'}]}  >
              <View >
                <Text style={styles.buttonText}>퇴근</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#717571'}]}  >
              <View >
                <Text style={styles.buttonText}>옵션</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            <ScrollView style={styles.list}>
              <DriveInfoList />
            </ScrollView>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderWidth:0,
    borderColor: 'red'
  },
  topContainer: {
    flex:1,
    flexDirection: 'row',
    borderWidth:0,
    borderColor: 'red',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionContainer: {
    flex:1,
    flexDirection: 'row',
    borderWidth:0,
    borderColor: 'red',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    flex:8,
    borderWidth:0,
    borderColor: 'red',
    width:width-30,
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 50,
    paddingLeft: 10,
    borderRadius: 2,
    margin: 5,
    borderColor: '#787B7D',
    borderWidth: 2
  },
  searchButton: {
    backgroundColor: '#16A0E8',
    width: 50,
    height: 40,
    borderRadius: 5,
    padding: 0,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchButtonText: {
    color: 'white',
    fontSize: 14
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 3,
    marginRight:20
  },
  title: {
    color: "white",
    fontSize: 30,
    margin: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  conditionview: {
    flex: 0.3
  },
  condition: {
    padding: 20,
    fontSize: 25
  },
  list: {
    backgroundColor: "white",
    flex: 1,
    width: width-30,
    borderRadius: 3,
    ...Platform.select({
      ios: {
        shadowColor:"rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height:-1,
          width: 1
        }
      },
      android: {
        elevation:3
      }
    })
  },
  inputbox: {
    backgroundColor: "white",
    width: width - 25,
    borderRadius: 3
  },
  button: {
    backgroundColor: '#181918',
    width: 60,
    height: 30,
    borderRadius: 5,
    padding: 0,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }

});
