import React, { useState } from 'react';
import { SafeAreaView, TextInput,Text, StyleSheet, View, CheckBox, Pressable, Alert } from 'react-native';



const SignUp = () => {
  const [username, onChangeusername] = React.useState(null)
  const [password, onChangepassword] = React.useState(null)
  const [isSelected, setSelection] = useState(false);
  function VerifyLogin(){
    if(username == "admin" && password == "admin"){
      Alert.alert('Login Successfully.');
    }
    else{
      Alert.alert('Login Unsuccessfull.');
    }

  }
  return (
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>What's your name?</Text>
        <View style={styles.DataContainer}>
        <SafeAreaView>
        <Text style={styles.label}>FIRSTNAME</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeusername}
            value={username}
          />
          <Text style={styles.label}>LASTNAME</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangepassword}
            value={password}
          />
        <Text style={{fontSize: 12,marginTop:10}}>By tapping Sign Up & Accept, you acknowledge that you have read the Privacy Policy and agree to the Terms of Service.</Text>

        </SafeAreaView>
        
      </View>
      <Pressable style={styles.button} onPress={VerifyLogin}>
      <Text style={styles.text}>Sign Up & Accept</Text> 
      </Pressable>
      </View>
      
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      borderRadius: 50,
    backgroundColor: '#ffffff',
    marginLeft: 40,
    marginRight: 40,
    flex: 1,
  },
  button: {
    marginLeft: "10%",
    marginRight: "10%",
    width: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#fffc00',
    position: 'absolute',
    bottom: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  heading: {
    marginTop: 100,
    marginBottom: 50,
    fontSize: 25,
    textAlign: 'center',
  },
  label: {
    paddingTop: 6,
    paddingBottom: 6,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#414346",
    fontWeight: "bold",
    fontSize: 11,
    textAlign: "left",
  },
  iconContainer: {
    marginTop: 20,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 50,
    width: 50
  },
  input: {
    height: 40,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#414346",
    padding: 5,
  },
  DataContainer: {
    backgroundColor: 'white',
  }
})

export default SignUp
