import React, {useState, useContext} from 'react'
import { StyleSheet, Text, Dimensions, View, ScrollView, } from 'react-native'
import { getProductQueries } from '../hooks/useReactQuery'
import ProductContext from "../context/productContext"
import ProductItems from '../components/ProductItems'
import SetProductsCount from '../components/SetProductsCount'
import ProductDescription from '../components/ProductDescription'
import AddCard from '../components/AddCard'
import COLORS from "../constants/colors"
import ROUTES from "../constants/routes"

const ProductDetails = ({route, navigation}) => {

  const {id} = route.params;
  const [count, setCount] = useState(1)
  const {products} = getProductQueries();
  const choosenProduct = products.filter(p => p.id === id);
  const productPrice = choosenProduct[0].price * count;
  const {addProduct} = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <ProductItems 
        products={choosenProduct}
      />
      
      <ProductDescription 
        product={choosenProduct}
      />

      <SetProductsCount 
        count={count}
        setCount={setCount}
      />

      <AddCard 
        addProduct={() => {
          addProduct(choosenProduct, count);
          navigation.navigate(ROUTES.CART)
        }}
        productPrice={productPrice}
      />
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ORANGE
  },
})