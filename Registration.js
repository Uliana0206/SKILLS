import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { firebase } from '../firebase';
import { gStyle } from "../gStyles";

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firsName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    registerUser = async (email, password, firsName, lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: 'https://test-8dd03.firebaseapp.com',
            })
            .then(() => {
                alert('Verification email seny')
            }).catch((error) => {
                alert(error.message)
                })
                .then(() => {
                    firebase.firestore().collection('user')
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        firsName,
                        lastName,
                        email,
                    })
                })
                .catch((error) => {
                    alert(error.message)
                })
            .catch((error) => {
                alert(error.message)
            })
        })
    }

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.heat}>
                Регистрация
            </Text>
            <View style={{marginTop:40}}>
                <TextInput style={gStyle.pole}
                    placeholder="Имя"
                    onChangeText={(firsName) => setFirstName(firsName)}
                    autoCorrect={false}
                />
                <TextInput style={gStyle.pole}
                    placeholder="Фамилия"
                    onChangeText={(lastName) => setLastName(lastName)}
                    autoCorrect={false}
                />
                <TextInput style={gStyle.pole}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <TextInput style={gStyle.pole}
                    placeholder="Пароль"
                    onChangeText={(password) => setPassword(password)}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={gStyle.button1}
                onPress={() => registerUser(email, password, firsName, lastName)}
            >
                <Text style={gStyle.textbutton1}>Зарегистрироваться</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Registration
