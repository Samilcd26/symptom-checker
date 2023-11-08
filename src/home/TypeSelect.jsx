import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import ChooseOptions from '../components/ChooseOptions';
import { DISPLAY } from '../settings/Display';




const TypeSelect = () => {
  return (
    <View style={styles.container}>
          <View style={styles.centerContainer}>
            <ChooseOptions title="Adult" iconName="accessibility-new" />
            <ChooseOptions title="Child" iconName="child-care" />
            <ChooseOptions title="Pet" iconName="pets" />
            <ChooseOptions title="" iconName="more-horiz" />
          </View>
        </View>
  )
}

export default TypeSelect

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        height: "80%",
        width: DISPLAY.Width,
      },
      centerContainer: {
        marginHorizontal:  DISPLAY.Width* 0.2,
        flexDirection: "row",
        width: DISPLAY.Width * 0.6,
        flexWrap: "wrap",
      },
      
})