import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';


const CheckBox = (props) => {
    const iconName = props.value? "checkbox-marked" : "checkbox-blank-outline";

    return (
        <View style={styles.container}>
            <Pressable onPress={() => props.onPress(!props.value)}>
                <MaterialCommunityIcons name={iconName} size={24} color="#000" />
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
    
export default CheckBox;

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 150,
        marginTop: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 16,
        color: "#000",
        marginLeft: 5,
        fontWeight: "600",
    }
})
