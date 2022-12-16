import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import COLORS from "../../constants/colors";

let {width, height} = Dimensions.get("screen");

const Splash = ({setSplash}) => {
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.shoppingContainer}>
        <View style={styles.shoppingIconContainer}>
          <AntDesign name="shoppingcart" style={styles.shoppingIcon} />
        </View>
        <Text style={styles.shoppingTxt}>Shopping App</Text>
      </View>

      <TouchableOpacity 
        style={styles.buttonContainer}
        activeOpacity={0.3}
        onPress={setSplash}
      >
        <View style={styles.button}>
          <Text style={styles.buttonTxt}>Get Started</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.ORANGE,
      justifyContent: "center"
    },
    shoppingContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 100
    },
    shoppingIconContainer: {
      backgroundColor: COLORS.WHITE,
      padding: 20,
      borderRadius: 100
    },
    shoppingIcon: {
      fontSize: 60,
      color: COLORS.ORANGE,
      alignSelf: "center"
    },
    shoppingTxt: {
      fontSize: 35,
      fontWeight: "600",
      color: COLORS.WHITE,
      marginTop: 10
    },
    buttonContainer: {
      position: "absolute",
      alignSelf: "center",
      bottom: 0.15 * height
    },
    button: {
      backgroundColor: COLORS.WHITE,
      width: 0.6 * width,
      padding: 10,
      borderRadius: 20
    },
    buttonTxt: {
      textAlign: "center",
      fontSize: 21,
      fontWeight: "bold",
      color: COLORS.ORANGE,
    }
})

export default Splash;