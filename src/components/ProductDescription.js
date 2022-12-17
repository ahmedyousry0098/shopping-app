import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import COLORS from "../constants/colors";

const ProductDescription = ({product}) => {
  return (
        <View style={styles.txtContainer}>
            <ScrollView>
              <View style={styles.sectionContainer}>
                <Text style={styles.title}>Product Name:</Text>
                <Text style={styles.txt}>{`${product[0].title}`}</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.title}>Product Description</Text>
                <Text style={styles.txt}>{product[0].description}</Text>
              </View>
            </ScrollView>
        </View>
    )
}

export default ProductDescription

const styles = StyleSheet.create({
    txtContainer: {
        height: "75%",
        backgroundColor: COLORS.WHITE,
        borderTopStartRadius: 70,
        borderTopEndRadius: 70,
        marginHorizontal: 0,
        paddingTop: 50,
      },
      sectionContainer: {
        marginVertical: 10,
        marginHorizontal: 30
      },
      title: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 4,
        color: COLORS.OFF_WHITE.FOURTH
      },
      txt: {
        fontWeight: "400",
        fontSize: 13,
        paddingLeft: 5,
        color: COLORS.OFF_WHITE.FOURTH
      }
})