import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IButton from "../components/IButton";
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from "../components/Colors";

const ChooseOptions = ({iconName,title}) => {
  return (
    <View style={styles.chooseBox}>
      <MaterialIcons name={iconName} size={36} color={COLORS.white} />
      {title?<Text style={styles.title}>{title}</Text>:""}
    </View>
  );
};

const ChoosePerson = () => {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.black}}>
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <ChooseOptions title="Adult" iconName="child-care" />
          <ChooseOptions title="Child" iconName="accessibility-new" />
          <ChooseOptions title="Pet" iconName="pets" />
          <ChooseOptions title="" iconName="more-horiz" />
          
        </View>
      </View>
      <View>
        <IButton />
      </View>
    </SafeAreaView>
  );
};

export default ChoosePerson;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height:'90%'
  },
  centerContainer:{
    flexDirection: "row",
   
    width: "60%",
    flexWrap: "wrap",
  },
  chooseBox: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 15,
    width: 80,
    height: 90,
    borderColor: COLORS.primalGrey,
  },
  title:{
    color: COLORS.white
  }
});
