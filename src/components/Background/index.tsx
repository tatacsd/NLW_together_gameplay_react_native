import React, { ReactNode } from "react";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    children: ReactNode;
}

export function Background({ children }: Props) {
    // reduce code
    const {secondary80, secondary100} = theme.colors.brand;
    return (
        <LinearGradient 
            colors={[secondary80, secondary100]} 
            style={styles.container}
        >
           {children}
        </LinearGradient>
    )
}