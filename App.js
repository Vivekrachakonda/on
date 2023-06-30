import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./screens/FirstScreen.js";
import SecondScreen from "./screens/SecondScreen.js";
import ThirdScreen from "./screens/ThirdScreen.js";
import FourthScreen from "./screens/FourthScreen.js";
import Final from "./screens/Final.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />

        <Stack.Screen name="SecondScreen" component={SecondScreen} />

        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />

        <Stack.Screen name="FourthScreen" component={FourthScreen} />

        <Stack.Screen name="Final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
