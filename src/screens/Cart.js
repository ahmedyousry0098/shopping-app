import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductContext from '../context/productContext'
import ProductItems from '../components/ProductItems'
import COLORS from "../constants/colors"

const Cart = () => {

  const {state: {products}} = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <ProductItems 
        products={products}
        showDeleteBtn={true}
        showCounter={true}
      />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ORANGE_BG
  }
})