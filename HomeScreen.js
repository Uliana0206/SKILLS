import React, {useEffect, useState} from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import {firebase} from '../firebase';
import { gStyle } from "../gStyles";


const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState([]);

    const ListingScreen = () => {
        navigation.navigate('ListingScreen')   
    };

    const progressScreen = () => {
        navigation.navigate('ProgressScreen')   
    };
    const Ballans = () => {
        navigation.navigate('Ballans')   
    };

    useEffect(() => {
        firebase.firestore().collection("users")
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setName(snapshot.data()) 
            }
        else {
            console.log('does not exist')
        }
        })
    }, [])

    return (
        <SafeAreaView style={gStyle.main}>
            <Text>{name.email}</Text>
            <Text style={{fontSize:20, fontWeight:"bold", color:'#3562FF'}}>
                {name.firsName}
            </Text>

            <TouchableOpacity onPress={ListingScreen}>
            <View style={gStyle.button}>
                <Text style={gStyle.textbutton1}>Листинг задач</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={progressScreen}>
                <View style={gStyle.button}>
                    <Text style={gStyle.textbutton1}>Достижения</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Ballans}>
                <View style={gStyle.button}>
                    <Text style={gStyle.textbutton1}>Баланс</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {firebase.auth().signOut()}}
                >
                    <Text style={{marginTop: '100%', textAlign:"center", color:'#6750A4'}}>Выйти из аккаунта</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen