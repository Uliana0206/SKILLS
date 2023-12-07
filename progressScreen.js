import React from "react";
import {  View, Text} from "react-native";
import { gStyle } from "../gStyles";

export default function ProgressScreen () {
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.heat}>Достижения</Text>
            <View style={gStyle.polezad}>
                <Text>Лучший разработчик </Text>
                <Text style={{marginLeft:'71%'}}>30 000 Ас</Text>
            </View>
            <View style={gStyle.polezad}>
                <Text>Победа на финале МПИТ</Text>
                <Text style={{marginLeft:'68%'}}>100 000 Ас</Text>
            </View>
        </View>
    )
}