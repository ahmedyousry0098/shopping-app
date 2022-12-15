import React, {useContext} from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import AuthonticationContext from "../../context/authContext"
import WlecomeForm from "../../components/Auth/WlecomeForm"
import AuthForm from "../../components/Auth/AuthForm"
import NavLink from "../../components/Auth/NavLink"
import ROUTES from "../../constants/routes";
import COLORS from "../../constants/colors";

const LogIn = ({navigation}) => {

  const {logIn} = useContext(AuthonticationContext)

  return (
    <KeyboardAvoidingView style={styles.container}>
      <WlecomeForm 
        title="Welcome Back!"
        todo="Sign In"
      />
      <AuthForm 
        buttonTitle="Log In"
        buttonAction={logIn}
      />
      <NavLink
        content="Don't have an account? "
        buttonTitle="Sign Up"
        navigateTo={ROUTES.REGISTER}
      />
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    }
});

export default LogIn;