import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import COLORS from "../constants/colors"

const {width} = Dimensions.get("screen")

const AddCard = ({count, setCount, addProduct}) => {

  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <View style={{}}>
            <Text style={{color: COLORS.OFF_WHITE.FOURTH, fontWeight: "bold"}}>Product Quantity</Text>
        </View>
        <View style={styles.productQuantityContainer}>
            <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.countChangerContainer}>
                <View>
                    <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>+</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.countContainer}>
                <Text style={{textAlign: "center", fontSize: 20, color: "rgb(150, 150, 50)"}}>{count}</Text>
            </View>
            <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.countChangerContainer}>
                <View>
                    <Text style={{textAlign: "center", fontSize: 20, color: "white"}}>-</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.btnContainer}
        onPress={addProduct}
      >
        <View>
            <Text style={{color: COLORS.WHITE, fontWeight: "700", fontSize: 18}}>Add Card</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AddCard

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 50,
    },
    quantityContainer: {
        width: width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    productQuantityContainer: {
        flexDirection: "row",
    },
    countChangerContainer: {
        backgroundColor: COLORS.ORANGE,
        padding: 15,
        borderRadius: 20,
        width: 50,
        textAlign: "center"
    },
    countContainer: {
        backgroundColor: COLORS.ORANGE_BG,
        padding: 10,
        width: 60,
        borderRadius: 20,
        justifyContent: "center"
    },
    btnContainer: {
        marginTop: 30,
        padding: 10,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: COLORS.ORANGE,
        width: "90%",
        borderRadius: 60,
    }
})