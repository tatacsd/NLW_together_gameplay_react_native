import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImg="https://github.com/tatacsd.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Hey,</Text>
                    <Text style={styles.username}>Thays</Text>
                </View>
                <Text style={styles.message}>Today is a winning day</Text>
            </View>
        </View>
    )
}
