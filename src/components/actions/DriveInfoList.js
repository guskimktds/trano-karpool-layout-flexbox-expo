import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, ActivityIndicator } from "react-native";
import * as globalStyles from '../../styles/global';

const { width, height } = Dimensions.get("window");

export default class DriveInfoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoaded : false,
      jsonData : {}
    };
  }

  componentDidMount() {
    this._getDriveInfo();

    console.log("App.js props : "+this.props.name);
  }

  _getDriveInfo=() => {
    //let driveApiUrl = "http://localhost:8080/driveInfos";
    let driveApiUrl = "http://192.168.43.85:8080/driveInfos";
    console.log("driveApiUrl : "+driveApiUrl);

    fetch(driveApiUrl, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(driveinfos => {
      console.log(driveinfos);
      this.setState({
        isLoaded : true,
        jsonData : driveinfos
        // id: driveinfos[0]._id,
        // custno: driveinfos[0].custno
      });

      //console.log(jsonData);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  render() {
    const { jsonData, isLoaded } = this.state;
    console.log(isLoaded);
    return (
      <View style={styles.container}>
        { isLoaded ? (Object.values(jsonData).map(
          (driveinfos) =>
          <View style={[styles.list]} key={driveinfos._id}>
            <View>
              <Text style={styles.text}>{driveinfos.waypoint} → {driveinfos.destination}</Text>
              <Text>{driveinfos.start_time} , {driveinfos.term} , {driveinfos.personnel}명, {driveinfos.status}</Text>
            </View>
            <View>
              <TouchableOpacity style={[styles.button]}  >
                <View >
                  <Text style={styles.buttonText}>신청</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )) : (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list : {
    paddingLeft : 20,
    paddingTop : 10,
    paddingBottom : 10,
    paddingRight : 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#A6F4FF',
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text : {
    fontSize : 20,
    color : globalStyles.TEXT_COLOR
  },
  button: {
    backgroundColor: globalStyles.BTN_COLOR,
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
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }

});
