import { View, Text, Image} from "react-native";
import { gStyle } from "../gStyles";

export default function Form () {
    return (
        <View style={gStyle.main}>
            <View style={{backgroundColor:'#A193C7', marginHorizontal:30, marginVertical:35, borderRadius:12, height:130}}>
                <View style={gStyle.bord}>
                    <View style={{flex:1}}>
                         <Image source={require('../assets/Accelcoin.png')} style={{ marginVertical:13}}/>    
                    </View>
                        <View style={{flex:2}}>
                            <Text style={{marginTop:5, marginLeft:8, color:'#ffffff'}}>Accelcoin</Text>
                            <Text style={{marginTop:3, marginLeft:8, color:'#ffffff', fontSize:10}}>это виртуальная валюта экосистемы
                            МПИТ, предназначенная для поощрения участников за активности в рамках мероприятий</Text>
                        </View>
                </View>
            </View>
            <Text style={{color:'#6750A4', fontSize:15}}>Accelcoin-</Text>
            <Text style={{fontSize:15}}>внутренняя волюта в приложении, которая дается за выполнение заданий и достижений.</Text>
            <Text style={{color:'#6750A4', fontSize:15}}>Accelcoin-</Text>
            <Text style={{fontSize:15}}> можно потратить в приложении.</Text>
        </View>
    )
}