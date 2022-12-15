import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { getProductQueries } from '../hooks/useReactQuery'
import { useNavigation } from '@react-navigation/native';
import LottieView from "lottie-react-native";
import ProductItems from '../components/ProductItems'
import SeeAllBar from '../components/SeeAllBar';
import COLORS from "../constants/colors"
import ROUTES from "../constants/routes"

const Product = ({route}) => {

  const navigation = useNavigation()
  const {products, status} = getProductQueries();
  const category = route.params?.category;
  let choosenProductes = category ? products.filter(p => p.category === category) : products;

  if (status === "loading") {
    return <View style={{position: "absolute", top: 150, alignSelf: "center"}}>
        <LottieView 
            speed={0.7}
            autoPlay={true}
            autoSize
            source={require("../../assets/animations/loading.json")}
        />
        <Text style={{fontSize: 20, color: COLORS.ORANGE, alignSelf: "center"}}>Loading...</Text>
    </View>
  }

  if (status === "error") {
      return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 20, color: COLORS.ORANGE}}>Something Went Wrong, Please Reload The Page ..</Text>
  </View>
  }

  return <View style={styles.container}>
    <SeeAllBar 
      action={() => navigation.navigate(ROUTES.PRODUCT)}
      title="All Products"
    />
    <ScrollView>
      <ProductItems 
        products={choosenProductes}
        showBuyBtn={true}
      />
    </ScrollView>
  </View>
}

export default Product

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ORANGE_BG
  },
})