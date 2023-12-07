import React from "react";
import { View, Text, Image} from "react-native";
import { gStyle } from "../gStyles";

export default function Mag() {

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.heat}>Магазин</Text>
            <View style={{backgroundColor:'#6750A4', marginTop:5, marginHorizontal: '2%', paddingVertical: 1, borderRadius: 6}}>                   
            </View>
            <View style={gStyle.bord}>
                <View style={{flex:1, height:240, width:140, backgroundColor:'#ffffff', borderRadius:13}}>
                    <View style={{flex:1, height:140, width:140, backgroundColor:'#A0A0A099', borderRadius:13}}>
                        <Image source={require('../assets/Hudi.png')} style={{marginHorizontal:10, marginVertical:15}}/>
                    </View>
                    <Text style={{marginLeft:5}}>Хиди, мерч МПИТ</Text>
                    <Text style={{marginLeft:5}}>150 000 Ac</Text>
                </View>
                <View style={{flex:1, height:240, width:140, backgroundColor:'#ffffff', borderRadius:13, marginLeft:15}}>
                    <View style={{flex:1, height:170, width:140, backgroundColor:'#A0A0A099', borderRadius:13}}>
                        <Image source={require('../assets/krugki.png')} style={{marginHorizontal:10, marginVertical:15}}/> 
                    </View>
                    <Text style={{marginLeft:5}}>Термостакан, мерч МПИТ</Text>
                    <Text style={{marginLeft:5}}>30 000 Ac</Text>
                </View>
            </View>
            <View style={gStyle.bord}>
                <View style={{flex:1, height:240, width:140, backgroundColor:'#ffffff', borderRadius:13,}}>
                    <View style={{flex:1, height:170, width:140, backgroundColor:'#A0A0A099', borderRadius:13}}>
                        <Image source={require('../assets/Noski.png')} style={{marginHorizontal:10, marginVertical:15}}/> 
                    </View>
                
                    <Text style={{marginLeft:5}}>Носки, мерч МПИТ</Text>
                    <Text style={{marginLeft:5}}>13 000 Ac</Text>
                </View>
                <View style={{flex:1, height:240, width:140, backgroundColor:'#ffffff', borderRadius:13, marginLeft:15}}>
                    <View style={{flex:1, height:170, width:140, backgroundColor:'#A0A0A099', borderRadius:13}}>
                        <Image source={require('../assets/futbolka.png')} style={{marginHorizontal:10, marginVertical:15}}/> 
                    </View>
                    <Text style={{marginLeft:5}}>Футболка, мерч МПИТ</Text>
                    <Text style={{marginLeft:5}}>30 000 Ac</Text>
                </View>
            </View>
            
        </View>
    )
}