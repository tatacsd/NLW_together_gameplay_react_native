import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";



export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
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
                <ButtonIcon onPress={handleSignIn} />
            </View>
        </View>
    );
}