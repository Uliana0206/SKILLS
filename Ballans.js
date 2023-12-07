import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { gStyle } from "../gStyles";
import Form from "./Form";
import { useState } from "react";

export default function Ballans({navigation}) {
    const Mag = () => {
        navigation.navigate('Mag');
    };
    const [modalWindow, setModalWindow] = useState(false);

    return (
        <View>
            <Modal visible={modalWindow}>
                <Form/>
                <TouchableOpacity onPress={() => setModalWindow(false)}>
                    <View style={gStyle.button}>
                        <Text style={gStyle.textbutton1}>Выйти</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
            <View style={{backgroundColor:'#ffffff'}}>
                <TouchableOpacity onPress={() => setModalWindow(true)}>
                    <View style={{backgroundColor:'#A193C7', marginHorizontal:50, marginVertical:30, borderRadius:12, height:120}}>
                        <Text style={{marginTop:5, marginLeft:8, color:'#ffffff'}}>Баланс</Text>
                        <Text style={{textAlign:"center", fontSize:35, marginTop:'3%', color:'#ffffff'}}>1156</Text>
                        <View style={{backgroundColor:'#beb3de', height:20, marginTop:5, width:80, marginLeft:'65%', borderRadius:102}}>
                            <Text style ={{ fontSize:10, marginTop:2, color:'#4b3c75', textAlign:"center"}}>Accelcoin</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:20, marginVertical:'5%', marginTop:20}}>История транзакций</Text>
            <View style={{backgroundColor:'#ffffff', height:'100%'}}>
                <TouchableOpacity onPress={Mag}>
                    <View style={gStyle.button1}>
                        <Text style={gStyle.textbutton1}>Магазин</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}