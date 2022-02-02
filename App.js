// In App.js in a new project

import * as React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen.js";
import LoginScreen from "./src/Screens/LoginScreen.js";
import FlexboxScreen from "./src/Screens/FlexboxScreen.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Flexbox" component={FlexboxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
