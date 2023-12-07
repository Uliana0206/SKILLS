import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Pressable } from "react-native";
import firebase from "firebase/compat";
import { gStyle } from "../gStyles";

const todoRef = firebase.firestore().collection("todos");

const ListingScreen = ({navigation}) => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const unsubscribe = todoRef.onSnapshot((querySnapshot) => {
          const newTodos = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
    
            newTodos.push(data);
          });
          setTodos(newTodos);
        });

        return () => unsubscribe(); // Отмена подписки при размонтировании компонента
    }, []);
  

    return (
        <View style={gStyle.main}>
            <Text style={{ marginTop: 1, marginLeft:6, fontSize:18, color:'#6750A4'}}>Привет,</Text>
            <Text style={{marginTop: 1, marginLeft:6, fontSize:15}}>кажется появились новые задачи!</Text>
            <SafeAreaView>
                <View>
                    <FlatList
                    data={todos}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <Pressable>
                        <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                            <View style={gStyle.polezad}>
                            <Text style={{fontSize:18}}>{item.Nazv}</Text>
                            <Text>{item.Komp}</Text>
                            <Text style={{marginTop: 10}}>{item.time}                         {item.Sale}</Text>
                            </View>
                        </TouchableOpacity>
                        </Pressable>
                    )}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ListingScreen