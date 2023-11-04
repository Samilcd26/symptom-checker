import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

import ChoosePerson from "./src/home/ChoosePerson";
import { View } from "react-native";
import AddSymptom from "./src/symptoms/AddSymptom";
import { COLORS } from "./src/components/Colors";
import { Provider } from "react-redux";
import { store } from "./src/redux/configureStore";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    "person-service": require("./assets/fonts/Personal-Services.ttf"),
    azonix: require("./assets/fonts/Azonix.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>

    <View onLayout={onLayoutRootView} >
      <AddSymptom />
    </View>
    </Provider>
  );
}

/*
<View onLayout={onLayoutRootView}>
          <HomeScreen />
        </View>
*/
