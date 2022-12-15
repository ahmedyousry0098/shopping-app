import { Divider } from '@rneui/base'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import COLORS from "../constants/colors"

const SeeAllBar = ({action, title}) => {
  return <>
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={action}>
            <Text style={styles.buttonTxt}>See All</Text>
        </TouchableOpacity>
    </View>
    <Divider width={1}/>
  </>
}

export default SeeAllBar;

const styles = StyleSheet.create({
  container: {flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10},
  title: {fontWeight: "bold", fontSize: 22},
  buttonTxt: {color: COLORS.ORANGE, fontWeight: "bold", fontSize: 17},
})