import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

import { Provider } from "react-redux";
import { store } from "./src/redux/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/RootNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/home/HomeScreen";
import { View, Text } from "react-native";

//SplashScreen.preventAutoHideAsync();

const Tab = createStackNavigator();


function App() {
  // const [fontsLoaded] = useFonts({
  //   "person-service": require("./assets/fonts/Personal-Services.ttf"),
  //   azonix: require("./assets/fonts/Azonix.otf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}





const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="HomeScreen">
      <StackHome.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </StackHome.Navigator>
  );
}



export default App;
/*
<View onLayout={onLayoutRootView}>
          <HomeScreen />
        </View>
*/
