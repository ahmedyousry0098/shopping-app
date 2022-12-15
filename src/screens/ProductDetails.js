import React, {useState, useContext} from 'react'
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native'
import { getProductQueries } from '../hooks/useReactQuery'
import ProductContext from "../context/productContext"
import ProductItems from '../components/ProductItems'
import AddCard from '../components/AddCard'
import COLORS from "../constants/colors"
import ROUTES from "../constants/routes"

const ProductDetails = ({route, navigation}) => {

  const [count, setCount] = useState(1)
  const {id} = route.params;
  const {products} = getProductQueries();
  const choosenProduct = products.filter(p => p.id === id);
  const {addProduct} = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <ProductItems 
        products={choosenProduct}
        showBuyBtn={false}
      />
      <View style={styles.txtContainer}>

        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Product Name:</Text>
          <Text style={styles.txt}>{`${choosenProduct[0].title}`}</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Product Description</Text>
          <Text style={styles.txt}>{choosenProduct[0].description}</Text>
        </View>
      </View>

      <AddCard 
        count={count}
        setCount={setCount}
        addProduct={() => {
          addProduct(choosenProduct, count);
          navigation.navigate(ROUTES.CART)
        }}
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
  txtContainer: {
    height: "80%",
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
    fontSize: 14,
    paddingLeft: 5,
    color: COLORS.OFF_WHITE.FOURTH
  }
})