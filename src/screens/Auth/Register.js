import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WlecomeForm from "../../components/Auth/WlecomeForm"
import AuthonticationContext from "../../context/authContext"
import AuthForm from '../../components/Auth/AuthForm';
import NavLink from '../../components/Auth/NavLink';
import {firebase} from "../../firease/firebase";
import COLORS from "../../constants/colors";
import ROUTES from "../../constants/routes"

const Register = () => {

  const {logIn} = useContext(AuthonticationContext)

  return (
    <View style={styles.container}>
      <WlecomeForm 
        title="Create Account"
        todo="Sign Up"
      />
      <AuthForm 
        buttonTitle="Sign Up"
        buttonAction={logIn}
      />
      <NavLink 
        content={"Already have an account? "}
        buttonTitle={"Sign In"}
        navigateTo={ROUTES.LOGIN}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.WHITE,
  }
  
})

export default Register