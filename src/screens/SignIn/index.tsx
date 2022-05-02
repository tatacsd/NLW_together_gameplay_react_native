import React, {useState} from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function SignIn() {

    const [text, setText] = useState('Thays');
    return (
        <View style={styles.container}>
            <Text>Nlw SignIn</Text>
            <TextInput 
            style={styles.input} placeholder="Email"
            onChangeText={setText} />
            <Text>You typed: {text} </Text>
        </View>
    );
}