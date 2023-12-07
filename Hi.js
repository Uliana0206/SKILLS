import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { gStyle } from "../gStyles";

export default function Hi({ navigation }) {
    const loadScenereg = () => {
        navigation.navigate('Registration');
    }
    const loadSceneVhod = () => {
        navigation.navigate('Login')
    }

    return (

      <View style={gStyle.main}>
        <Image source={require('../assets/ПроSKILLS.png')} style={{marginLeft:10}}/>
        <TouchableOpacity>
            <View style={gStyle.button}>
                <Text style={gStyle.textbutton1} onPress={loadSceneVhod}>Войти</Text>
            </View>
        </TouchableOpacity>
            <Text style={gStyle.textbutton} onPress={loadScenereg}>Нет аккаунта? Зарегистрироваться</Text>
    </View>
    );
}