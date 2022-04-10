import React, { useState } from 'react';
import {StyleSheet, View, Image, Pressable, Text} from 'react-native';
import logo from '../../assets/snapchat_icon.png';

const IndexScreen = () => {
  return (
      <View style={styles.mainContainer}>

          <View style={styles.LogoContainer}>
           <Image style={styles.image} source={logo}/>
          </View>

         <View style={styles.MainButtons}>
         <Pressable style={styles.button} >
          <Text style={styles.text}>Sign Up</Text>
          </Pressable>
          <Pressable style={styles.button}>
          <Text style={styles.text}>Use Other Account</Text>
          </Pressable>
         </View>
       
      </View>
      
  )
}

const styles = StyleSheet.create({
    mainContainer: {
    backgroundColor: '#fffc00',
    paddingLeft: 20,
    borderRadius: 50,
    paddingRight: 20,
    flex: 1,
  },
  LogoContainer: {
      marginTop:"10%",
      padding: "10%",
      alignItems: 'center',
  },
  image: {
      width: 50,
      height: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: "2%",
    elevation: 3,
    marginRight: "20%",
    backgroundColor: '#fffc00',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  MainButtons: {
    position: 'absolute',
    bottom: 50,
    flexDirection : 'row',
    marginLeft: "10%",
    marginRight: "10%",
  }
})

export default IndexScreen
