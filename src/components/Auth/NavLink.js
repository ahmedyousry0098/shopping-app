import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from "../../constants/colors";

const NavLink = ({content, buttonTitle, navigateTo}) => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.content}>{content}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 2.5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    content: {
      fontSize: 17
    },
    buttonText: {
      color: COLORS.ORANGE,
      fontSize: 17,
      fontWeight: "bold"
    }
})

export default NavLink