import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        backgroundColor: theme.colors.brand.primary,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
});