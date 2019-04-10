Object.values(object1).map(
  (obj) => {
    if (typeof obj === "object") {
      Object.values(obj).map((subobj)=> console.log(subobj))
    } else { console.log(obj) } })


    <View style={styles.container}>
      { (Object.values(jsonData).map( (driveinfos) =>
        <View style={[styles.list]} key={driveinfos._id}>
          {Object.values(driveinfos).map( (routeArray, index) =>
            <View key={index}>
              <Text style={styles.text}>{routeArray.driveInfoKey}</Text>
              <View>
                <Text style={styles.text}>{driveinfos.name} → {driveinfos.author}</Text>
                <Text>{driveinfos.sabun} , {driveinfos.name} , {driveinfos.tel}명, {driveinfos.name}</Text>
              </View>
              <View>
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



  var obj1 = {
        "_id" : "5ca72910e143b23072d8e8f4",
        "name" : "김유신",
        "sabun" : "99999999",
        "tel" : "01012345678",
        "email" : "gus.kim@kt.com",
        "author" : "passenger",
        "pushToken" : "12134",
        "driveInfo" : [
                {
                        "driveInfoKey" : "201904031559590001",
                        "route" : {
                                "waypoint" : "서울 구로구 개봉동 한마을아파트 정문 입구",
                                "destination" : "분당 kt 본사",
                                "start_time" : "071000",
                                "end_time" : "083000",
                                "passengers" : "3",
                                "status" : "ing",
                                "registDate" : "20190403155959"
                        },
                        "schedule" : {
                                "driveType" : "reservation",
                                "drivingStartDate" : " 20190405",
                                "drivingEndDate" : "20190505",
                                "nonDriving" : "holiday"
                        },
                        "passengerInfo" : [
                                {
                                        "name" : "안중근",
                                        "phone" : "01019190301",
                                        "email" : "gus.kim@kt.com"
                                },
                                {
                                        "name" : "유관순",
                                        "phone" : "01019190302",
                                        "email" : "gus.kim@kt.com"
                                },
                                {
                                        "name" : "윤봉길",
                                        "phone" : "01019190303",
                                        "email" : "gus.kim@kt.com"
                                }
                        ]
                }
        ],
        "carInfo" : {
                "owner" : "me",
                "number" : "19구 1919",
                "type" : "페라리",
                "insurance" : "personal"
        },
        "rideInfo" : "음식물반입금지, 출발시간 5분전 대기, 미 승차 시 사전연락요구, 트렁크 짐칸 필요 시 사전연락필요"
}




<View style={styles.container}>
  { (Object.values(jsonData).map( (driveinfos) =>
    <View key={driveinfos._id}>
      {Object.values(driveinfos.driveInfo).map( (driveInfo, index) =>
        <View key={index}>
          {Object.values(driveInfo.route).map( (route, ik) =>
            <View style={[styles.list]} key={ik}>
              <View>
                <Text style={styles.text}>{route.waypoint} → {route.destination}</Text>
                <Text>{route.start_time} , {route.end_time} , {route.passengers}명, {route.status}</Text>
              </View>
              <View>
                <TouchableOpacity style={[styles.button]}  >
                  <View >
                    <Text style={styles.buttonText}>신청</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  )) }
</View>




{route.start_time.substring(0,2)}시{route.start_time.substring(2,4)}분 ~ {route.end_time.substring(0,2)}시{route.end_time.substring(2,4)}분 , {route.passengers}명, {(route.status === 'ing') ? '모집중' : '마감'  }




{((driveInfo.route.start_time !== "null") : driveInfo.route.start_time.substring(0,2) : "XX")}시{((driveInfo.route.start_time !== "null") : driveInfo.route.start_time.substring(2,4) : "XX")}분 ~
  {((driveInfo.route.end_time !== "null") : driveInfo.route.end_time.substring(0,2) : 'XX')}시{((driveInfo.route.end_time !== "null") : driveInfo.route.end_time.substring(2,4) : "XX")}분,  {driveInfo.route.passengers}명, {(driveInfo.route.status === 'ing') ? '모집중' : '마감'  }





<View style={styles.container}>
  { (Object.values(jsonData).map( (driveinfos) =>
    <View style={styles.sublist} key={driveinfos._id}>
      {Object.values(driveinfos.driveInfo).map( (driveInfo, index) =>
        <View style={styles.todepthlist} key={index}>
          {Object.values(driveInfo.route).map( (route, ik) =>
            <View style={[styles.listContainer]} key={ik}>
              <View style={styles.list}>
                <Text style={styles.text} numberOfLines={1}>{route.waypoint} </Text>
                <Text style={styles.text} numberOfLines={1}> → {route.destination}</Text>
                <Text style={styles.smallText}>{route.passengers}명, {(route.status === 'ing') ? '모집중' : '마감'  }</Text>
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
      )}
    </View>
  )) }
</View>
