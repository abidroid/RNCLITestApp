import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import {Routes} from './Routes';
import AxiosExampleOneScreen from '../screens/AxiosExampleOne/AxiosExampleOneScreen';
import AxiosMovieSearchScreen from '../screens/AxiosMovieSearch/AxiosMovieSearchScreen';
import ProductListScreen from '../screens/ProductList/ProductListScreen';
import AxiosPostRequestScreen from '../screens/AxiosPostRequest/AxiosPostRequestScreen';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Landing}
      //screenOptions={{header: () => null, headerShown: false}}
      >
      <Stack.Screen name={Routes.Landing} component={LandingScreen} />
      <Stack.Screen
        name={Routes.AxiosExampleOne}
        component={AxiosExampleOneScreen}
      />
      <Stack.Screen
        name={Routes.AxiosMovieSearch}
        component={AxiosMovieSearchScreen}
      />
      <Stack.Screen
        name={Routes.ProdudutList}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={Routes.AxiosPostRequest}
        component={AxiosPostRequestScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
