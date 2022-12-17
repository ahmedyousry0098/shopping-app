import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import COLORS from "../constants/colors"

const {width} = Dimensions.get("screen")

const CartCounter = ({count, increaseProductCount, decreaseProductCount}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={increaseProductCount}
        >
            <View style={styles.countChangerContainer}>
                <Text>+</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.countContainer}>
            <Text>{count}</Text>
        </View>
        <TouchableOpacity
            onPress={decreaseProductCount}
        >
            <View style={styles.countChangerContainer}>
                <Text>-</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CartCounter

const styles = StyleSheet.create({
    container: {
        width: 0.25 * width,
        position: "absolute",
        bottom: 5,
        right: 0.2 * width,
        flexDirection: "row",
        alignItems: "center",
    },
    countChangerContainer: {
        backgroundColor: COLORS.ORANGE,
        padding: 1,
        borderRadius: 20,
        width: 30,
        alignItems: "center"
    },
    countContainer: {
        backgroundColor: COLORS.ORANGE_BG,
        width: 30,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
})