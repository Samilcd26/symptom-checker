import { StyleSheet, Text, View,TextInput } from "react-native";
import React from "react";

import ChooseOptions from "../components/ChooseOptions";
import { DISPLAY } from "../settings/Display";
import { SIZE } from "../settings/Size";
import { COLORS } from "../settings/Colors";

const GenderAndAgeSelect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <View style={{flexDirection:'row'}}>
        <ChooseOptions title="Adult" iconName="accessibility-new" />
        <ChooseOptions title="Child" iconName="child-care" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput maxLength={2} placeholder="Age" placeholderTextColor={COLORS.white} style={styles.input} keyboardType="numeric" />
        </View>
      </View>
    </View>
  );
};

export default GenderAndAgeSelect;

const styles = StyleSheet.create({
  container: {
    width: DISPLAY.Width,
    justifyContent: "center",
  },
  centerContainer: {
    marginHorizontal: DISPLAY.Width * 0.2,
    flexDirection: "column",
    width: DISPLAY.Width * 0.6,
    flexWrap: "wrap",
  },
  inputContainer:{
    alignItems: "center",
},
  input:{
    padding:10,
    fontSize:28,
    color: COLORS.white,
    textAlign: "center",
    borderWidth:1,
    height:SIZE.optionBoxHeight,
    width:SIZE.optionBoxWith,
    borderRadius:SIZE.optionBoxRadius,
    borderColor:COLORS.primalGrey
  }
});
