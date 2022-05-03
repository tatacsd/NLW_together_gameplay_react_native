import React, {useState} from "react";
import {Image, View, Text, StatusBar } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar 
            barStyle={"light-content"}
            backgroundColor='transparent'
            translucent
            />
            <Image 
                source={IllustrationImg} 
                style={styles.image} 
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize your games
                </Text>

                <Text style={styles.subtitle}>
                    Create groups to play {`\n`} your favorite games with friends
                </Text>
                <ButtonIcon  activeOpacity={0.7}/>
            </View>
        </View>
    );
}