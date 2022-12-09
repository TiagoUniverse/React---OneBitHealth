import React from "react"
import { View, Text } from "react-native"
import { TextInput } from "react-native-web";



export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex. 1.70"
                    KeyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric" 
                />
            </View>


            <View></View>
            <View></View>
        </View>
    );
}