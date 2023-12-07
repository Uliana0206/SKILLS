import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {firebase} from "../firebase";
import { gStyle } from "../gStyles";

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser = async (email,password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
        } catch (error){
            alert(error)
        }
    }

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.heat}>
                Вход
            </Text>
            <View style={{marginTop:40}}>
                <TextInput style={gStyle.pole}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput style={gStyle.pole}
                    placeholder="Пароль"
                    onChangeText={(password) => setPassword(password)}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={gStyle.button1} 
                onPress={() => loginUser(email,password)}
            >
                <Text style={gStyle.textbutton1}>
                    Войти
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
