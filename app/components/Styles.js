import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: 240,
        backgroundColor: '#FCFCFC',  // RBG
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    checkbox:{
        alignSelf: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text1: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text2: {
        paddingTop: 7,
        width: 240,
        fontSize: 14,
        textAlign: 'left',
        textAlignVertical: 'bottom',
    },
    error: {
        paddingTop: 7,
        width: 240,
        fontSize: 14,
        textAlign: 'left',
        textAlignVertical: 'bottom',
        color: "red",
        fontWeight: 'bold',
    },
    label: {
        paddingTop: 7,
        width: 240,
        fontSize: 14,
        textAlign: 'left',
        textAlignVertical: 'bottom',
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        width: 240,
        paddingTop: 14,
        fontSize: 14,
        textAlign: 'left',
        textAlignVertical: 'bottom',
        fontWeight: 'bold',
    }
});
