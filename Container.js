import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import Icon
import { Ionicons } from "@expo/vector-icons";

// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import FormNativeBase from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

// Create Component Bottom Tab Navigation
function MyTab(){

  const theme = useTheme()

  return(
    <Tab.Navigator
      screenOptions={({route})=> ({
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: theme.colors.primary["300"]},

        tabBarIcon: ({focused}) => {
          let iconName;
          
          if(route.name == "Home"){
            iconName = focused ? "home" : "home-outline" 
          } else if(route.name == "Form"){
            iconName = focused ? "document" : "document-outline" 
          }

          return <Ionicons name={iconName} size={20} color="navy" />
        },
        tabBarActiveTintColor: theme.colors.primary['800'],
        tabBarInactiveTintColor: "grey"

      })}
    >


      <Tab.Screen name="Home" component={Hello}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Form" component={FormNativeBase} />
    
    
    </Tab.Navigator>
  )
}

export default function Container() {
  // Init Theme
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
            headerTintColor:"white",
            headerMode: 'screen',
            headerStyle: {backgroundColor: theme.colors.primary["300"]}
          }}
        />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            title: "Increment Decrement",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
