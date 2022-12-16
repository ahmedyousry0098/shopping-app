import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import COLORS from "../constants/colors"

const {width} = Dimensions.get("screen")

const SetProductsCount = ({count, setCount, /*changeProductCount*/ }) => {
  return (
    <View style={styles.container}>
        <View style={{marginBottom:12}}>
            <Text style={{color: COLORS.OFF_WHITE.FOURTH, fontWeight: "bold", fontSize: 19}}>Product Quantity</Text>
        </View> 

        <View style={styles.productQuantityContainer}>
            <TouchableOpacity onPress={() => {
                    setCount(count + 1);
                    // changeProductCount
                }} 
                style={styles.countChangerContainer}
            >
                <View>
                    <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>+</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.countContainer}>
                <Text style={{textAlign: "center", fontSize: 20, color: "rgb(150, 150, 50)"}}>{count}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                    setCount(count - 1);
                    // changeProductCount
                }} 
                style={styles.countChangerContainer}
            >
                <View>
                    <Text style={{textAlign: "center", fontSize: 22, color: "white"}}>-</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SetProductsCount

const styles = StyleSheet.create({
    container: {
        width: 0.9 * width,
        position: "absolute",
        bottom: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
    },
    productQuantityContainer: {
        flexDirection: "row",
    },
    countChangerContainer: {
        backgroundColor: COLORS.ORANGE,
        padding: 10,
        borderRadius: 20,
        width: 50,
        textAlign: "center"
    },
    countContainer: {
        backgroundColor: COLORS.ORANGE_BG,
        padding: 10,
        width: 50,
        borderRadius: 20,
        justifyContent: "center"
    },
})