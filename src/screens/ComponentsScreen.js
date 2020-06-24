import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Stephen';

    return (
    <View>
        <Text style={style.textStyle}>Getting started with react native!</Text>
        <Text style={style.myName}>My name is {name}</Text>
    </View>
    );
};


const style = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    myName: {
        fontSize: 20
    }
});

export default ComponentsScreen;