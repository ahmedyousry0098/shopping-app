import React, {useState} from "react";
import {View, Text, TextInput, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import COLORS from "../../constants/colors"
import { Divider } from "@rneui/base";
import { FontAwesome } from '@expo/vector-icons';
import Spacer from "../Spacer";

const AuthForm = ({buttonTitle, buttonAction}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.inputContainer}>
                <FontAwesome name="envelope-o" style={styles.Icon} />
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email .."
                    style={styles.input}
                    keyboardType="email-address"
                />
            </View>

            <Spacer>
                <View style={styles.inputContainer}>
                    <FontAwesome name="unlock-alt" style={styles.Icon} />
                    <TextInput 
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password .."
                        secureTextEntry
                        style={styles.input}
                    />
                </View>
            </Spacer >

            <Spacer />

            <TouchableOpacity 
                style={styles.buttonContainer} 
                activeOpacity={0.5}
                onPressOut={() => buttonAction(email, password)}    
            >
                <View style={email && password ? styles.activeButton : styles.disableButton}>
                    <Text style={styles.buttonText}>{buttonTitle}</Text>
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
    },
    InstagamImgContainer: {
        padding: 5,
        alignSelf: "center",
        height: "25%",
        width: "90%"
    },
    InstagamImg: {
        width: "100%",
        height: "100%",
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.OFF_WHITE.FIRST,
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 8,
    },
    Icon: {
        fontSize: 21,
        color: COLORS.ORANGE,
        flex: 1,
        textAlign: "center",
    },
    input: {
        fontSize: 18,
        flex: 10
    },
    buttonContainer: {
        width: "70%",
        alignSelf: "center",
    },
    disableButton: {
        backgroundColor: COLORS.ORANGE,
        opacity: 0.6,
        borderRadius: 10,
        padding: 5,
    },
    activeButton: {
        backgroundColor: COLORS.ORANGE,
        borderRadius: 10,
        padding: 5,
    },
    buttonText: {
        fontSize: 22,
        color: "white",
        textAlign: "center"
    }
});

export default AuthForm;