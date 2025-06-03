import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import style from "./style";

const LandingScreen = () => {

    return (
        <SafeAreaView style={style.container}>
        <ScrollView>
            <Text style={style.heading}>Welcome</Text>
            <TouchableOpacity>
                <View style={style.listTile}>
                <View style={style.leading}>
                    <Text>1</Text>
                </View>
                <View style={style.listTileColumn}>
                    <Text style={style.title}>Axios Example</Text>
                    <Text style={style.subtitle}>Get Call to an API</Text>
                </View>
                <View>
                    <Text>Go</Text>
                </View>
            </View>
            </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
    );
};


export default LandingScreen;
