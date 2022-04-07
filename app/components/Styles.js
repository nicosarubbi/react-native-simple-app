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
    containerHome: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },

    checkbox:{
        alignSelf: "center",
        marginRight: 10,
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
    button:{
        width: 240,
        paddingTop: 14,
        fontSize: 14,
        textAlign: 'left',
        textAlignVertical: 'bottom',
        fontWeight: 'bold',
    },
    // Estilo Post 
    item: {
        padding: 10,
        marginTop: 3,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f8f8f8',
        alignItems: 'flex-start',
    },
    text: {
        fontWeight: 'bold',
        color: '#4f603c',
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
    // 
    containerBlue: {
        backgroundColor: '#B2DAFA', // 6A9EDA
        marginTop: 10,
        padding:10,
    },
    textBlue: { 
        fontWeight: "bold",
        fontSize: 12,
    }, 

    // Post
    containerPost: {
        flex: 1,
        paddingTop: 22
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignItems: 'center',
      }
});
