import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getCategoryQueries} from "../hooks/useReactQuery";
import COLORS from "../constants/colors";
import ROUTES from "../constants/routes"

const CategoriesItems = ({forHomeScreen}) => {

  const navigation = useNavigation();

  const {categories, status} = getCategoryQueries();

  const choosenCategories = forHomeScreen ? categories?.slice(0, 3) : categories;

  if (status === "loading") {
      return <View style={{position: "absolute", top: 150, alignSelf: "center"}}>
          <Text style={{fontSize: 20, color: COLORS.ORANGE, alignSelf: "center"}}></Text>
      </View>
  }

  if (status === "error") {
      return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 20, color: COLORS.ORANGE}}>Something Went Wrong, Please Reload The Page ..</Text>
      </View>
  }

  return (
    <>
      <View style={forHomeScreen ? styles.containerForHome : styles.containerForCategories}>
      {
        choosenCategories?.map((cat, index) => {
          return (
            <TouchableOpacity 
              key={index}
              activeOpacity={0.3}
              onPress={() => navigation.navigate(ROUTES.PRODUCT, {"category": cat})}
              style={forHomeScreen ? styles.cartContainerForHome : styles.cartContainerForCategories}
            >
              <View style={{alignItems: "center", justifyContent: "center", borderRadius: 20, flex: 1}}>
                <Text style={styles.txt}>{cat}</Text>
              </View>
            </TouchableOpacity>
        )})
      }
      </View>
    </>
  )
}

export default CategoriesItems

const styles = StyleSheet.create({
  containerForHome: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  containerForCategories: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    backgroundColor: COLORS.ORANGE_BG
  },
  cartContainerForHome: {
    width: "25%",
    height: 100,
    backgroundColor: COLORS.WHITE,
    margin: 10,
  },
  cartContainerForCategories: {
    width: "60%",
    height: 200,
    backgroundColor: COLORS.WHITE,
    margin: 10,
  },
  txt: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold"
  }
})