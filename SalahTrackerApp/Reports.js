//import liraries
import React, { useState , useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import { ButtonGroup } from "./ButtonGroup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph";
import background from "../assets/logo2.jpg";

// create a component
export default function Reports() {
  const TempData = [1, 1, 1, 1, 1];

  const [dataFromDb, setdataFromDb] = useState(TempData);
  const [TotalNimazs, setTotalNimazs] = useState(0);
  const [OfferedNimazs, setOfferedNimazs] = useState(0);
  const [DataRangeOptionShow, setDataRangeOptionShow] = useState(true);

 

  const getCurrentDate = (date) => {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + "-0" + month + "-" + date; //format: dd-mm-yyyy;
  };
  const fetchDataofWeek = async (setData) => {
    const week = [];
    for (var i = 6; i >= 0; i--) {
      var date = new Date();
      var temp = null;
      temp = getCurrentDate(date.getDate() - i);
      week.push(temp);
    }
    var fajarcount = 0;
    var zuharcount = 0;
    var asrcount = 0;
    var maghribcount = 0;
    var eshacount = 0;
    for (var i = 0; i < 7; i++) {
      try {
        const jsonValue = await AsyncStorage.getItem(week[i]);
        if (jsonValue != null) {
          const parseValue = JSON.parse(jsonValue);
          if (parseValue[0]["Fajar"]) {
            fajarcount++;
          }
          if (parseValue[0]["Zuhar"]) {
            zuharcount++;
          }
          if (parseValue[0]["Asr"]) {
            asrcount++;
          }
          if (parseValue[0]["Maghrib"]) {
            maghribcount++;
          }
          if (parseValue[0]["Esha"]) {
            eshacount++;
          }
        }
        // console.log("You Fetch the data with date ",week[i]," with data ",jsonValue);
      } catch (e) {
        console.log(e);
      }
    }
    setOfferedNimazs(
      fajarcount + zuharcount + asrcount + maghribcount + eshacount
    );
    const data = [fajarcount, zuharcount, asrcount, maghribcount, eshacount];
    setdataFromDb(data);
    // console.log("Total: ",fajarcount," - ",zuharcount," - ",asrcount," - ",maghribcount," - ",eshacount);
  };
  const fetchDataofMonth = async (setData) => {
    const week = [];
    for (var i = 29; i >= 0; i--) {
      var date = new Date();
      var temp = null;
      temp = getCurrentDate(date.getDate() - i);
      week.push(temp);
    }
    var fajarcount = 0;
    var zuharcount = 0;
    var asrcount = 0;
    var maghribcount = 0;
    var eshacount = 0;
    for (var i = 0; i < 30; i++) {
      try {
        const jsonValue = await AsyncStorage.getItem(week[i]);
        if (jsonValue != null) {
          const parseValue = JSON.parse(jsonValue);
          if (parseValue[0]["Fajar"]) {
            fajarcount++;
          }
          if (parseValue[0]["Zuhar"]) {
            zuharcount++;
          }
          if (parseValue[0]["Asr"]) {
            asrcount++;
          }
          if (parseValue[0]["Maghrib"]) {
            maghribcount++;
          }
          if (parseValue[0]["Esha"]) {
            eshacount++;
          }
        }
        // console.log("You Fetch the data with date ",week[i]," with data ",jsonValue);
      } catch (e) {
        console.log(e);
      }
    }
    setOfferedNimazs(
      fajarcount + zuharcount + asrcount + maghribcount + eshacount
    );
    const data = [fajarcount, zuharcount, asrcount, maghribcount, eshacount];
    setdataFromDb(data);
    // console.log("Total: ",fajarcount," - ",zuharcount," - ",asrcount," - ",maghribcount," - ",eshacount);
  };

  const printButtonLabel = (item) => {
    if (item == 0) {
      fetchDataofWeek();
      setTotalNimazs(35);
    }
    if (item == 1) {
      fetchDataofMonth();
      setTotalNimazs(150);
    }
    if (item == 2) {
      Alert.alert("Coming Soon", "Sir im working on it.");
      setDataRangeOptionShow(!DataRangeOptionShow);
    }
  };

  useEffect(
    ()=>{
        fetchDataofWeek();
      setTotalNimazs(35);
    }
);

  const config = {
    hasXAxisBackgroundLines: true,
    xAxisLabelStyle: {
      position: "left",
      //   prefix: '✅'
    },
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.ContentBox}>
          <View style={styles.HeadingTab}>
            <Text style={styles.Heading}>Previous Record</Text>
          </View>
          <View style={styles.RecordButtons}>
            <ButtonGroup
              buttons={["Last 7 Days", "Monthly", "Date Range"]}
              doSomethingAfterClick={printButtonLabel}
            />
          </View>
          {DataRangeOptionShow ? <Text>hi</Text> : null}
          <View style={styles.ChartContainer}>
            <View>
              <VerticalBarGraph
                data={dataFromDb}
                labels={["فجر", "ظہر", "عصر", "مغرب", "عشاء"]}
                width={300}
                height={270}
                barColor="#0059a1"
                barRadius={3}
                barWidthPercentage={0.5}
                baseConfig={config}
                style={styles.chart}
              />
            </View>
            <Text style={styles.prayerResult}>
              You Offered {OfferedNimazs} out of {TotalNimazs}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: null,
    height: null,
  },
  image: {
    flex: 1,
  },
  ChartContainer: {
    marginTop: 70,
    marginRight: 20,
    marginLeft: 20,
    opacity: 0.9,
    borderRadius: 10,
  },
  chart: {
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    borderRadius: 20,
    backgroundColor: "white",
    borderBottomColor: "#0059a1",
    borderBottomWidth: 2,
  },
  ContentBox: {
    marginTop: 50,
    marginBottom: 10,
  },
  HeadingTab: {
    marginTop: 15,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  Heading: {
    fontSize: 35,
    fontStyle: "normal",
    color: "#0059a1",
    fontWeight: "600",
  },
  prayerResult: {
    fontSize: 25,
    fontStyle: "normal",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    margin: 13,
    fontWeight: "500",
  },
  RecordButtons: {
    marginLeft: 40,
    marginRight: 40,
  },
});
