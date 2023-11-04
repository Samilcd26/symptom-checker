import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import IButton from "../components/IButton"
import { COLORS } from "../components/Colors";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introContainer}>
        <View style={styles.intro}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text}>
            Irure nisi pariatur ullamco reprehenderit sint exercitation ullamco
            non deserunt amet. Voluptate pariatur laboris quis culpa eiusmod
            tempor adipisicing occaecat cupidatat et commodo reprehenderit
            occaecat officia. Sunt anim nulla non repreh
          </Text>
          <Text style={styles.warning}>Welcome</Text>
        </View>

        <View style={styles.startButtonContainer}>
          <IButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    height: "100%",
    width: "100%",
  },
  introContainer: {
    height: "70%",
    width: "100%",
  },
  intro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 50,
    //fontFamily: "azonix",
    color: COLORS.white,
  },
  text: {
    marginTop: 20,
    color: COLORS.white,
    fontSize: 15,
    textAlign: "center",
    //fontFamily: "azonix",
  },
  warning: {
    marginTop: 20,
    color: COLORS.red,
    fontSize: 15,
    textAlign: "center",
    //fontFamily: "azonix",
  },
  startButtonContainer: {
    bottom: 0,
  },
});
