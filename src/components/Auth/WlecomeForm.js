import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from "../../constants/colors";

const WlecomeForm = ({title, todo}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcomeTxt]}>{title}</Text>
      <Text style={[styles.titleTxt]}>{`${todo} To Continue`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0
    },
    welcomeTxt: {
        fontSize: 40,
        fontWeight: "600",
        color: COLORS.ORANGE
    },
    titleTxt: {
        fontSize: 23,
        fontWeight: "500"
    }
})

export default WlecomeForm