import React, { Component } from "react";
import {  View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Platform, AsyncStorage, StatusBar   } from 'react-native';
//import uuidv1 from "react-native-uuid";
import uuidv1 from "uuid/v1";
//import firebase from 'react-native-firebase';
//import type { Notification, NotificationOpen } from 'react-native-firebase';

const {height, width } = Dimensions.get("window");

export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : "",
      sabun : "",
      tel : "",
      email : "",
      author : ""
    }
    this._handleChange = this._handleChange.bind(this);
    this._SignUp = this._SignUp.bind(this);
    this._registDriveInfo = this._registDriveInfo.bind(this);
    //this._cancle = this._cancle.bind(this);
  }

  _handleChange(name, value) {
      //console.log("name : "+name+", value : "+value);
      this.setState({[name]: value})
  }

  _cancle() {
    console.log("cancle !!!!");
  }

  _SignUp = () => {
    console.log("_addDriveInfo");
    const { name, sabun, tel, email  } = this.state;

    // 회원가입 시 Push Token 발급 시작
    console.log("회원가입 시 Push Token 발급 시작");
    //let pushToken = this._getPushToken();
    // 회원가입 시 Push Token 발급 끝
    console.log("회원가입 시 Push Token 발급 끝, pushToken : "+pushToken);

    if( name !== "" && sabun !== "" && tel !== "" && email !== "" ){
      this.setState({
        name : "",
        sabun : "",
        tel : "",
        email : ""
      });

      const ID = uuidv1();
      const newSignUpObject = {
        id: ID,
        name : name,
        sabun : sabun,
        tel : tel,
        email : email,
        author : "passenger",
        pushToken : "pushToken"  // android runtime 에서 수정예정
      };

      this._saveSignUP(newSignUpObject);
    }
    else{
        console.log("회원정보 입력 필드 값 재 확인필요(null) !");
    }
  };

  // async _getPushToken() {
  //   // 회원가입 시 Push Token 발급 시작
  //   const fcmToken = await firebase.messaging().getToken();
  //   if (fcmToken) {
  //       console.log("fcmToken: "+fcmToken);
  //       // user has a device token
  //   } else {
  //     console.log("we have not token !!!!! ");
  //       // user doesn't have a device token yet
  //   }
  //
  //   return fcmToken;
  // }

  _saveSignUP = signUpInfos => {
      console.log(JSON.stringify(signUpInfos));
      const saveDriveInfos = AsyncStorage.setItem("signUpInfos", JSON.stringify(signUpInfos) );

      // db 등록
      this._registDriveInfo(JSON.stringify(signUpInfos));
  }

  _registDriveInfo=(signUpInfos) => {
    //let driveApiUrl = "http://localhost:8080/driveInfos";
    let driveApiUrl = "http://192.168.43.85:8080/api/karforuInfo";
    console.log("driveApiUrl : "+driveApiUrl);
    console.log("signUpInfos : "+signUpInfos);

    fetch(driveApiUrl, {
        method: 'POST',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        },
        body: signUpInfos
      }).then(res => console.log("posted res : "+res)).then(signUpInfos => {
      console.log("posted signUpInfos : "+signUpInfos);
      // this.setState({
      //   driveInfos : driveInfos
      //   // id: driveinfos[0]._id,
      //   // custno: driveinfos[0].custno
      // });

      //console.log(jsonData);
      //회원가입
      //push 토큰 발급 및 저장처리

    })
    .catch((error) => {
      console.error(error);
    });
  };

  _authEmail=() => {
    console.log("메일주소로 인증메일을 보낸다.");
    //인증메일 발송 기능 구현
  }

  render() {
    const { name, sabun, tel, email } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"  />
          <View style={styles.topContainer}>
            <Text style={styles.title}>회원가입</Text>
          </View>
          <View style={styles.inputbody}>
            <View>
              <TextInput
                style={[styles.input, styles.text]}
                name="name" type="text" value={name}
                placeholder={'이름'}
                onChangeText={(txt) => this._handleChange("name", txt)}
              />
              <TextInput
                style={[styles.input, styles.text]}
                name="sabun" type="text" value={sabun}
                placeholder={'사번'}
                onChangeText={(txt) => this._handleChange("sabun", txt)}
              />
              <TextInput
                style={[styles.input, styles.text]}
                name="tel" type="text" value={tel}
                placeholder={'핸드폰번호'}
                onChangeText={(txt) => this._handleChange("tel", txt)}
              />
            </View>
            <View style={styles.emailContainer}>
              <TextInput
                style={[styles.input, styles.text, {width:160}]}
                name="email" type="text" value={email}
                placeholder={'email'}
                onChangeText={(txt) => this._handleChange("email", txt)}
              />
            <TouchableOpacity style={styles.authButton} onPress={this._SignUp}>
                <View>
                  <Text style={styles.authButtonText}>인증</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.buttonbody}>
          <TouchableOpacity style={styles.button} onPress={this._SignUp}>
            <View>
              <Text style={styles.buttonText}>등록</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#4C4C4C'}]} onPress={this._cancle}>
            <View>
              <Text style={styles.buttonText}>취소</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  topContainer: {
    flex:1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  inputbody: {
    flex:2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonbody: {
    flex:2,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#405240'
  },
  input: {
    width: 200,
    height: 50,
    padding: 0,
    borderRadius: 2,
    marginBottom: 15,
    borderColor: '#599F59',
    borderWidth: 2
  },
  text: {
    color: '#407340',
    textAlign: 'left',
    fontSize: 20,
    paddingLeft: 10
  },
  button: {
    backgroundColor: 'blue',
    width: 60,
    height: 40,
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
  authButton: {
    backgroundColor: 'red',
    width: 30,
    height: 35,
    borderRadius: 5,
    padding: 0,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  authButtonText: {
    color: 'white',
    fontSize: 14
  },
  emailContainer: {
    flexDirection: 'row'
  }
});
