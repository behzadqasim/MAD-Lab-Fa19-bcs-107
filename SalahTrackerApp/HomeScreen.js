//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Switch,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import moment from "moment";
import CalendarStrip from "react-native-calendar-strip";
import AsyncStorage from '@react-native-async-storage/async-storage';

import background from "../assets/logo2.jpg";
import { setSelectedLog } from "react-native/Libraries/LogBox/Data/LogBoxData";

let datesWhitelist = [
  {
    start: moment().subtract(1, "M"),
    end: moment(),
  },
];



const HomeScreen = () => {
  const [selectedDate, setselectedDate] = useState(null);

  const [FajarStatus, setFajarStatus] = useState(false);
  const toggleSwitchForFajar = () => setFajarStatus((previousState) => !previousState);

  const [ZuharStatus, setZuharStatus] = useState(false);
  const toggleSwitchForZuhar = () => setZuharStatus((previousState) => !previousState);

  const [AsrStatus, setAsrStatus] = useState(false);
  const toggleSwitchForAsr = () => setAsrStatus((previousState) => !previousState);

  const [MaghribStatus, setMaghribStatus] = useState(false);
  const toggleSwitchForMaghrib = () => setMaghribStatus((previousState) => !previousState);

  const [EshaStatus, setEshaStatus] = useState(false);
  const toggleSwitchForEsha = () => setEshaStatus((previousState) => !previousState);

  const UncheckThePrayerButtons = () => {
      setFajarStatus(false);
      setZuharStatus(false);
      setAsrStatus(false);
      setMaghribStatus(false);
      setEshaStatus(false);
  };


  const storeData = async (Data) => {
    try {
      const jsonValue = JSON.stringify(Data);
      await AsyncStorage.setItem(selectedDate, jsonValue);
    //   console.log("You saved the data with date ",selectedDate," with data ",jsonValue); 
    Alert.alert("Salah Tracker","Your namaz log is saved successfully.");
    UncheckThePrayerButtons();
    } catch (e) {
    Alert.alert("Salah Tracker",e);
    }
  };

  const SwitchButtonForFajar = () => {
    return (
      <View>
        <Switch
          trackColor={{ false: "silver", true: "#a7cae6" }}
          thumbColor={FajarStatus ? "#0059a1" : "#a7cae6"}
          ios_backgroundColor="white"
          onValueChange={toggleSwitchForFajar}
          value={FajarStatus}
        />
      </View>
    );
  };
  const SwitchButtonForZuhar = () => {
    return (
      <View>
        <Switch
          trackColor={{ false: "silver", true: "#a7cae6" }}
          thumbColor={ZuharStatus ? "#0059a1" : "#a7cae6"}
          ios_backgroundColor="white"
          onValueChange={toggleSwitchForZuhar}
          value={ZuharStatus}
        />
      </View>
    );
  };
  const SwitchButtonForAsr = () => {
    return (
      <View>
        <Switch
          trackColor={{ false: "silver", true: "#a7cae6" }}
          thumbColor={AsrStatus ? "#0059a1" : "#a7cae6"}
          ios_backgroundColor="white"
          onValueChange={toggleSwitchForAsr}
          value={AsrStatus}
        />
      </View>
    );
  };
  const SwitchButtonForMaghrib = () => {
    return (
      <View>
        <Switch
          trackColor={{ false: "silver", true: "#a7cae6" }}
          thumbColor={MaghribStatus ? "#0059a1" : "#a7cae6"}
          ios_backgroundColor="white"
          onValueChange={toggleSwitchForMaghrib}
          value={MaghribStatus}
        />
      </View>
    );
  };
  const SwitchButtonForEsha = () => {
    return (
      <View>
        <Switch
          trackColor={{ false: "silver", true: "#a7cae6" }}
          thumbColor={EshaStatus ? "#0059a1" : "#a7cae6"}
          ios_backgroundColor="white"
          onValueChange={toggleSwitchForEsha}
          value={EshaStatus}
        />
      </View>
    );
  };

  const AddtoStorage = () => {
    if(selectedDate == null){
        Alert.alert("Error","Please Select the date first.")
    }
    else{
        console.log("Saving Data.");
        const Data = [
            {
              "Fajar":FajarStatus,
              "Zuhar":ZuharStatus,
              "Asr":AsrStatus,
              "Maghrib":MaghribStatus,
              "Esha":EshaStatus
            }
          ];
          storeData(Data);
          console.log("Data Saved.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.HeadingTab}>
          <Text style={styles.Heading}>Salah Tracker</Text>
        </View>
        <View style={styles.calendar}>
          <CalendarStrip
            calendarAnimation={{ type: "sequence", duration: 10 }}
            daySelectionAnimation={{
              type: "border",
              duration: 100,
              borderWidth: 1,
              borderHighlightColor: "white",
            }}
            onDateSelected={(date) => {
              setselectedDate(date.format("YYYY-MM-DD"));
              UncheckThePrayerButtons();
            }}
            style={{ height: 100, paddingTop: 15, paddingBottom: 5 ,borderRadius: 10,}}
            calendarHeaderStyle={{ color: "white" }}
            calendarColor={"#0059a1"}
            dateNumberStyle={{ color: "white" }}
            dateNameStyle={{ color: "white" }}
            highlightDateNumberStyle={{ color: "yellow" }}
            highlightDateNameStyle={{ color: "yellow" }}
            disabledDateNameStyle={{ color: "grey" }}
            disabledDateNumberStyle={{ color: "grey" }}
            datesWhitelist={datesWhitelist}
            iconContainer={{ flex: 0.1 }}
          />
        </View>
        <View style={styles.ContentBox}>

          <View style={styles.PrayersTabs}>

          <View style={styles.PrayersTab}>
              <View style={{ width: "50%" }}>
                  <Image style={{width:50,height:50,}} source={require("../assets/fajar.png")} />
              </View>
              <View style={{ width: "50%" }}>
              <Pressable style={styles.selectButton}>
                <SwitchButtonForFajar />
              </Pressable>
              </View> 
            </View>

            <View style={styles.PrayersTab}>
              <View style={{ width: "50%" }}>
              <Image style={{width:50,height:50,}} source={require("../assets/zuhar.png")} />
              </View>
              <View style={{ width: "50%" }}>
              <Pressable style={styles.selectButton}>
                <SwitchButtonForZuhar />
              </Pressable>
              </View> 
            </View>

            <View style={styles.PrayersTab}>
              <View style={{ width: "50%" }}>
              <Image style={{width:50,height:50,}} source={require("../assets/Asr.png")} />
              </View>
              <View style={{ width: "50%" }}>
              <Pressable style={styles.selectButton}>
                <SwitchButtonForAsr />
              </Pressable>
              </View> 
            </View>

            <View style={styles.PrayersTab}>
              <View style={{ width: "50%" }}>
              <Image style={{width:50,height:50,}} source={require("../assets/maghrib.png")} />
              </View>
              <View style={{ width: "50%" }}>
              <Pressable style={styles.selectButton}>
                <SwitchButtonForMaghrib />
              </Pressable>
              </View> 
            </View>

            <View style={styles.PrayersTab}>
              <View style={{ width: "50%" }}>
              <Image style={{width:50,height:50,}} source={require("../assets/esha.png")} />
              </View>
              <View style={{ width: "50%" }}>
              <Pressable style={styles.selectButton}>
                <SwitchButtonForEsha />
              </Pressable>
              </View> 
            </View>


          </View>
          <View >
            <TouchableOpacity style={styles.submitButton}
            onPress={() => AddtoStorage()}
            >
              <Text style={styles.submitButtonText} >Add to Log</Text>
            </TouchableOpacity>
          </View>

        </View>
       
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  calendar: {
    margin: 20,
  },
  image: {
    flex: 1,
  },
  ContentBox: {
    marginTop: 10,
    marginBottom: 10,
  },
  HeadingTab: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  Heading: {
    fontSize: 35,
    fontStyle: "normal",
    color: "#0059a1",
    fontWeight: "600",
  },
  PrayersTabs: {
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
  },
  PrayersTab: {
    marginTop: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
  },
  PrayerText: {
    fontSize: 17,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  selectButton: {
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  submitButton: {
    marginTop: 20,
    marginRight: 100,
    marginLeft: 100,
    borderColor:"black",
  },
  submitButtonText: {
      textAlign: "center",
      color: "white",
      backgroundColor : '#0059a1',
      fontWeight: "400",
      padding: 10,
      fontSize: 21,
  },
});

//make this component available to the app
export default HomeScreen;
