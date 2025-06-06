import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {flex: 1, padding: 8, gap:8},
    input: {
        borderWidth: 1,
        borderRadius:8,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: 'green',
        padding: 8,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
    },

    movieDetailContainer: {
        flex: 1,
        gap: 8,
        alignItems:'center',
       
    },
});

export default style;
