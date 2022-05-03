import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type AvatarProps = {
    urlImg: string;
};

export function Avatar({ urlImg }: AvatarProps) {
    const {secondary50, secondary70} = theme.colors.brand;
    return (
        <LinearGradient 
            colors={[secondary50, secondary70]} 
            style={styles.container}
        >
            <Image source={{ uri: urlImg }} style={styles.avatar} />
            
        </LinearGradient>
    )
}