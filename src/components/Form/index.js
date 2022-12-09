import React , {useState} from "react"
import { View, Text } from "react-native"
import { Button, TextInput } from "react-native-web";
import ResultImc from "./ResultImc";


export default function Form() {

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageIMC, setMessageImc]= useState("preencha o peso e altura")
    const [imc , setImc]= useState(null)
    const [textButton , setTextButton]= useState("Calcular")

    function imcCalculator(){
        return setImc((weight /(height*height)).toFixed(2))
    }

    function validationImc(){
        if (weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.70"
                    KeyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Button 
                    title="Calcular IMC" 
                    onPress={() => validationImc()}
                    />
            </View>

            <ResultImc messageResultImc={messageIMC} ResultImc={imc} />

        </View>
    );
}