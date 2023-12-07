import React, { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList, SafeAreaView } from "react-native";
import { firebase } from "../firebase";
import { gStyle } from "../gStyles";
import { useNavigationState, useRoute } from "@react-navigation/native";

const todoRef = firebase.firestore().collection("todos");

export default function FullInfo() {
  const item = useRoute().params;

  return (
    <SafeAreaView style={gStyle.main}>
      <View>
        <Text style={gStyle.heat}>Детали задачи</Text>
        <Pressable>
          <View>
            <Text style={gStyle.heatzag}>Название</Text>
            <Text>{item.Nazv}</Text>
            <Text style={gStyle.heatzag}>Описание</Text>
            <Text>{item.Opis}</Text>
            <Text style={gStyle.heatzag}>Дедлайн</Text>
            <Text>{item.time}</Text>
            <Text style={gStyle.heatzag}>Компания</Text>
            <Text>{item.Komp}</Text>
            <Text style={gStyle.heatzag}>Стоимость</Text>
            <Text>{item.Sale}</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}