import { StyleSheet } from "react-native";


const style = StyleSheet.create({

    container: {flex: 1, padding: 8},
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    productItemContainer: {
        padding: 10,
        paddingHorizontal: 8,
        backgroundColor: 'yellow',
        marginBottom: 8,
        borderRadius: 8,
        flexDirection: 'row',

    },

    priceContainer: {
        backgroundColor: "blue",
        padding: 8,
    },

    priceText: {
        color: 'white',
    }
});

export default style;
