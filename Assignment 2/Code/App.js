import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './src/screens/LoginForm';
import IndexScreen from './src/screens/IndexScreen';
import SignUp from './src/screens/SignUp';

const App = () => {
  return(
    <NavigationContainer>
      <SignUp/>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({

})

export default App;