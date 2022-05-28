import React , {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import fetchDataofWeek from './Reports.js';

export const ButtonGroup = ({ buttons, doSomethingAfterClick }) => {

    const [clickedId , setClickedId] = useState(0)

    const handleClick = (item,id) => {
        setClickedId(id)
        doSomethingAfterClick(id)
    }

  return (
    <View style={styles.container}>
      {buttons.map((buttonLabel, index) => {
        return (
          <TouchableOpacity 
          onPress={(item) => handleClick(item,index)}
          key={index}
          style = {[
              index === clickedId ? styles.buttonActive : styles.button,
              index === 0? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10} : "",
              index === 3? {borderTopRightRadius: 10, borderBottomRightRadius: 10} : ""
          ]}
          >
            <Text 
            style={index === clickedId ? styles.textActive : styles.text}>
                {buttonLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    height: 40,
    color: "#0059a1",
    backgroundColor: 'white',

    fontWeight: "200",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive : {
      flex : 1,
      height : 40,
      alignItems: 'center',
      justifyContent : 'center',
      backgroundColor : '#0059a1',
      borderColor : '#0059a1',

  },
  text: {
    color: "black",
    fontSize: 15,
    color: "#0059a1",
    fontWeight: "300",
  },
  textActive : {
    color: "black",
    fontSize: 17,
    color: "white",
    fontWeight: "300",
  },
});
