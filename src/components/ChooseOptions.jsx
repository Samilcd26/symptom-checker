import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MaterialIcons } from "@expo/vector-icons";
import { SIZE } from '../settings/Size';
import { COLORS } from '../settings/Colors';

const ChooseOptions = ({ iconName, title }) => {
    return (
      <View style={styles.chooseBox}>
        <MaterialIcons name={iconName} size={36} color={COLORS.white} />
        {title ? <Text  style={styles.title}>{title}</Text> : ""}
      </View>
    );
  };

export default ChooseOptions

const styles = StyleSheet.create({
    chooseBox: {
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZE.optionBoxRadius,
        margin: 15,
        width: SIZE.optionBoxWith,
        height: SIZE.optionBoxHeight,
        borderColor: COLORS.primalGrey,
      },  
      title: {
        color: COLORS.white,
      },
})