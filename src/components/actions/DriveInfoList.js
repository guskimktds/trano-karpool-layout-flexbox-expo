import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from "react-native";
import * as globalStyles from '../../styles/global';

const { width, height } = Dimensions.get("window");

export default class DriveInfoList extends Component {

  //const driveApiUrl = "http://192.168.43.85:8080/api/karforuInfo/waypoint/:waypoint";

  constructor(props){
    super(props);
    this.state = {
      isLoaded : true,
      jsonData : JSON.parse(this.props.resultData),
      isLoadDataEmpty : this.props.isLoadEmpty
    };

    console.log("DriveInfoList777777 ==> this.state.jsonData : "+this.props.resultData+" isLoadDataEmpty : "+this.props.isLoadEmpty);
  }


  render() {
    const { jsonData, isLoadDataEmpty } = this.state;

    if(isLoadDataEmpty){
      return <View style={styles.container}><Text>찾으시는 카풀정보가 없습니다.</Text></View>;
    }
    return (
      <View style={styles.container}>
        { (Object.values(jsonData).map( (driveinfos) =>
          <View style={styles.sublist} key={driveinfos._id}>
            {Object.values(driveinfos.driveInfo).map( (driveInfo, index) =>
              <View style={[styles.listContainer]} key={index}>
                <View style={styles.list}>
                  <Text style={styles.text} numberOfLines={1}>{driveInfo.route.waypoint} </Text>
                  <Text style={styles.text} numberOfLines={1}> → {driveInfo.route.destination}</Text>
                  <Text style={styles.smallText}> {driveInfo.route.passengers}명, {(driveInfo.route.status === 'ing') ? '모집중' : '마감'  }</Text>
                </View>
                <View style={styles.buttonContents}>
                  <TouchableOpacity style={[styles.button]}  >
                    <View >
                      <Text style={styles.buttonText}>신청</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )) }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: 'red'
  },
  listContainer : {
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
  list: {
    flex:3,
    borderWidth: 0,
    borderColor: 'yellow'
  },
  text : {
    fontSize : 20,
    color : globalStyles.TEXT_COLOR
  },
  smallText: {
    fontSize : 16,
    color: '#869696'
  },
  buttonContents: {
    flex:1,
    borderWidth: 0,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: globalStyles.BTN_COLOR,
    width: 60,
    height: 30,
    borderRadius: 5,
    padding: 0,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: 'yellow'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  sublist: {
    borderWidth: 0,
    borderColor: 'green',
  },
  todepthlist: {
    borderWidth: 0,
    borderColor: 'blue',
  }

});
