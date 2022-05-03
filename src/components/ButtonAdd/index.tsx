import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {View, Text, Image} from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from "../../global/styles/theme";


export function ButtonAdd({...rest}: RectButtonProps) {
    return (
        <RectButton 
            style={styles.container} 
            {...rest}
        >
            <MaterialCommunityIcons
                name="plus" 
                size={24} 
                color={theme.colors.text.heading}
            />
        </RectButton>
    )
}