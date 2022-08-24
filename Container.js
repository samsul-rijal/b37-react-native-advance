import * as React from "react";

//Import Navigation Container
import {NavigationContainer} from '@react-navigation/native'

// Import Stack Navigation
import {createStackNavigator} from '@react-navigation/stack'

// Import Theme Native Base
import { theme, useTheme } from "native-base";

// Import Screen
import FormNativeBase from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";

// Create Stack Navigation
let Stack = createStackNavigator()

export default function Container() {
  // Init Theme
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions= {{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: {backgroundColor: theme.colors.primary["300"]}
        }} 
      >
        <Stack.Screen name="Home" component={Hello} options={{title: "Hello Home"}} />
        <Stack.Screen name="IncDec" component={IncDec} options={{title: "Increment Decrement"}} />
      
      </Stack.Navigator>

    </NavigationContainer>
  )
}
