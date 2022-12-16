import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import COLORS from "../constants/colors"

const {width} = Dimensions.get("screen")

const AddCard = ({addProduct, productPrice}) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.btnContainer}
        onPress={addProduct}
      >
        <View style={{width: "100%", alignItems:"center"}}>
            <Text style={styles.btnTxt}>Add Card</Text>
          <Text style={[styles.btnTxt, {position: "absolute", right: 5, justifyContent: "center"}]}>{`$${productPrice}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AddCard

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 35,
        alignSelf: "center",
        justifyContent: "center"
    },
    btnContainer: {
        padding: 10,
        alignItems: "center",
        backgroundColor: COLORS.ORANGE,
        width: 0.8 * width,
        borderRadius: 60,
    },
    btnTxt: {color: COLORS.WHITE, fontWeight: "700", fontSize: 18}
})