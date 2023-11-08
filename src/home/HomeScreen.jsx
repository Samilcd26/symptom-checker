import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


import { AntDesign } from "@expo/vector-icons";
import * as RootNavigation from "../navigation/RootNavigation";
import TypeSelect from "./TypeSelect";

import { DISPLAY } from "../settings/Display";
import { COLORS } from "../settings/Colors";
import GenderAndAgeSelect from "./GenderAndAgeSelect";





let ComponentWith=DISPLAY.Width*3
let index=1

const nextStep = () => {
  RootNavigation.navigate("CompanyScreen");
};

const handlePress = (evt) => {
  index++
  this.myScroll.scrollTo({ x: 0, y: DISPLAY.Width*index, animated: true });
 
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black, height: "100%" }}>
      <ScrollView
         horizontal
         pagingEnabled
        ref={(ref) => {
          this.myScroll = ref;
        }}
      >
        <TypeSelect />
        <GenderAndAgeSelect />
      </ScrollView>
      <View style={styles.actionButtonContainer}>
        <View style={styles.actionButtonBorder}>
          <Pressable
            style={styles.actionButton}
            onPress={(e) => {
              handlePress(e);
            }}
          >
            <AntDesign name="right" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "80%",
    width: ComponentWith,
  },
  centerContainer: {
    marginHorizontal: DISPLAY.Width * 0.2,
    flexDirection: "row",
    width: DISPLAY.Width * 0.6,
    flexWrap: "wrap",
  },

  actionButtonContainer: {
    alignItems: "center",
  },
  actionButton: {
    borderWidth: 1,
    borderColor: COLORS.primalGrey,
    padding: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonBorder: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 50,
  },
  actionButtonText: {},
});
