import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import CategoriesItems from '../components/CategoriesItems'
import SeeAllBar from '../components/SeeAllBar'
import COLORS from "../constants/colors"

const Categories = () => {
  return (
    <ScrollView style={styles.container}>
      <CategoriesItems
        forHomeScreen={false}
      />
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ORANGE_BG
  }
})