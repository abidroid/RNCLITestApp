import { StyleSheet } from "react-native";

const style = StyleSheet.create({
container: {padding: 8, flex: 1},

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    listTile: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        gap: 16,
    },

    leading: {},
    listTileColumn :{
        flexDirection: 'column',
        flex: 1,
    },
    title: {},
    subtitle: {},
    trailing: {},
});

export default style;