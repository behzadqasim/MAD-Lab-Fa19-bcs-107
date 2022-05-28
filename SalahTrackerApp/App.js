import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./screen/HomeScreen";
import SettingsScreen from "./screen/SettingScreen";
import Reports from "./screen/Reports";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <NavigationContainer>
    <Tab.Navigator
      activeColor="#0086f3"
      inactiveColor="#a7cae6"
      labeled={false}
      barStyle={{
        backgroundColor: "white",
        bottom: 10,
        left: 10,
        right: 10,
        elevation: 0,
        position: "absolute",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderRadius: 20,
        height: 70,
        padding: 5,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={29} />
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarLabel: "Reports",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={29} />
          ),
        }}
      />
      <Tab.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{
        tabBarLabel: "Setting",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="tools" color={color} size={29} />
        ),
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: null,
    height: null,
  },
});
