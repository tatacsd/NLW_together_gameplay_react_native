import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    user: {
        flexDirection: "row",
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.text.heading,
        marginRight: 5,
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.text.heading,
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.others.highlight,
    },
});