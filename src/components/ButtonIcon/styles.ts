import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.brand.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.others.line,
    },
    icon: {
        width: 24,
        height: 18,
    },
    title: {
        flex: 1,
        color: theme.colors.text.heading,
        fontSize: 15,
        textAlign: 'center',
    },
});