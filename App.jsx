import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetialScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import MemoLogInScreen from "./src/screens/MemoLogInScreen";
import MemoSignUpScreen from "./src/screens/MemoSignUpScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={MemoListScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MemoSignUp"
        screenOptions={{
          headerStyle: { backgroundColor: "#467FD3" },
          headerTitleStyle: { color: "#fff" },
          headerTitle: "Memo App",
          headerTintColor: "#fff",
          headerBackTitle: "Back",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="MemoLogIn"
          component={MemoLogInScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="MemoSignUp"
          component={MemoSignUpScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
