import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../screens/LandingScreen";
import { Routes } from "./Routes";

const Stack = createStackNavigator();

const MainNavigation = () => {

    return <Stack.Navigator>
        <Stack.Screen
            name={Routes.Landing}
            component={LandingScreen}
        />
    </Stack.Navigator>;
};

export default MainNavigation;
